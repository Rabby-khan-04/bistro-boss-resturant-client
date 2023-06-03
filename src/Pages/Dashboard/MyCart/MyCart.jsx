import React from "react";
import { Helmet } from "react-helmet-async";
import { useCart } from "../../../Hooks/useCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch, isLoading] = useCart();
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  const navigate = useNavigate();

  const goToPayment = () => {
    navigate("/dashboard/payment");
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                position: "center-center",
                icon: "success",
                title: "Item Deleted Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <section>
        <div className="db__container">
          <SectionTitle subHeading={"My Cart"} heading={"Wanna Add More"} />
          <div className="bg-white p-12">
            <div className="font-cinzel font-semibold text-neutral flex justify-between items-center mb-12">
              <p className="text-3xl">Total orders: {cart.length}</p>
              <p className="text-3xl">total price: ${totalPrice}</p>
              <button
                className="btn bg-gold border-gold text-white text-xl"
                onClick={goToPayment}
              >
                Pay
              </button>
            </div>
            <div className="overflow-x-auto w-full">
              <table className="table w-full font-inter">
                {/* head */}
                <thead>
                  <tr className="uppercase">
                    <th className="bg-gold text-white"></th>
                    <th className="bg-gold text-white">Item Image</th>
                    <th className="bg-gold text-white">Item Name</th>
                    <th className="bg-gold text-white">Price</th>
                    <th className="bg-gold text-white">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={item._id}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={item.image}
                          className="h-20 w-20 object-cover"
                          alt=""
                        />
                      </td>
                      <td>
                        <h2>{item.name}</h2>
                      </td>
                      <td>
                        <p>${item.price}</p>
                      </td>
                      <td>
                        <button
                          className="btn bg-error border-error"
                          onClick={() => handleDelete(item._id)}
                        >
                          <RiDeleteBin5Line className="text-2xl text-white" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyCart;
