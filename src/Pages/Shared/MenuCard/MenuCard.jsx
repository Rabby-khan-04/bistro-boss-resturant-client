import React from "react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../../Hooks/useCart";
import { useAuth } from "../../../Hooks/useAuth";

const MenuCard = ({ food }) => {
  const { name, recipe, image, category, price, _id } = food;
  const { user } = useAuth();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = () => {
    if (user) {
      const cartItem = {
        foodId: _id,
        name,
        image,
        price,
        userEmail: user.email,
      };
      fetch("http://localhost:3000/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "center-center",
              icon: "success",
              title: "Food Added To The Cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="bg-[#F3F3F3] overflow-y-hidden">
      <div className="relative">
        <img
          src={image}
          className="w-full h-80 block object-cover object-center"
          alt=""
        />
        <p className="text-base py-3 px-6 bg-neutral font-inter text-white absolute top-5 right-5">
          ${price}
        </p>
      </div>
      <div className="py-8 px-10 font-inter text-center text-neutral h-full">
        <h2 className="text-2xl font-bold font-cinzel">{name}</h2>
        <p>{recipe}</p>
        <button onClick={handleAddToCart} className="golden__btn mt-6">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
