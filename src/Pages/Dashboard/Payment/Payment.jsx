import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useCart } from "../../../Hooks/useCart";

// TODO: Provide Publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((acc, curr) => acc + curr.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Payment</title>
      </Helmet>
      <section>
        <div className="db__container">
          <SectionTitle subHeading={"Proceed To"} heading={"Payment"} />
          <div className="bg-white p-12">
            <Elements stripe={stripePromise}>
              <CheckoutForm price={price} cart={cart} refetch={refetch} />
            </Elements>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
