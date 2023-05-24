import React from "react";

const MenuCard = ({ food }) => {
  const { name, recipe, image, category, price } = food;
  return (
    <div className="overflow-hidden">
      <div className="relative">
        <img
          src={image}
          className="w-full h-80 object-cover object-center"
          alt=""
        />
        <p className="text-base py-3 px-6 bg-neutral font-inter text-white absolute top-5 right-5">
          ${price}
        </p>
      </div>
      <div className="bg-[#F3F3F3] py-8 px-10 font-inter text-center text-neutral h-full">
        <h2 className="text-2xl font-bold font-cinzel">{name}</h2>
        <p>{recipe}</p>
        <button className="golden__btn mt-6">Add To Cart</button>
      </div>
    </div>
  );
};

export default MenuCard;
