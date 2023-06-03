import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../../../Hooks/useAuth";
import "./CheckoutForm.css";

const CheckoutForm = ({ price, cart, refetch }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);

  const token = localStorage.getItem("user-access-token");

  useEffect(() => {
    axios
      .post(
        "http://localhost:3000/create-payment-intent",
        { price },
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: `${error.code}`,
        text: `${error.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Anonymous",
            email: user?.email || "Anonymous",
          },
        },
      });

    if (confirmError) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `${confirmError?.code}`,
        text: `${confirmError?.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }

    console.log(paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      const transactionId = paymentIntent.id;
      const payment = {
        email: user?.EmailAuthCredential,
        transactionId,
        price,
        date: new Date(),
        quantity: cart.length,
        orderStatus: "Servce Pending",
        cartitems: cart.map((item) => item._id),
        menuitems: cart.map((item) => item.foodId),
        itemName: cart.map((item) => item.name),
      };

      axios
        .post("http://localhost:3000/payments", payment, {
          headers: {
            authorization: `bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.insertResult.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              text: `Successfully Place the order`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
          if (res.data.deleteResult.deletedCount) {
            refetch();
          }
        });
    }
  };

  return (
    <form className="space-y-16" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="max-w-md mx-auto">
        <button
          className="btn bg-[#570DF8] border-[#570DF8] text-xl text-white btn-block"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
