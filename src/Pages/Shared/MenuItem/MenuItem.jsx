import React from "react";

const MenuItem = ({ menu }) => {
  const { name, recipe, image, price } = menu;
  return (
    <div className="flex items-center gap-8">
      <img
        src={image}
        className="w-32 h-28 object-cover object-center rounded-full rounded-tl-none"
        alt=""
      />
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-cinzel font-medium text-neutral uppercase">
            {name} ------------------
          </h3>
          <p className="font-inter font-medium text-xl text-golden ">
            ${price}
          </p>
        </div>
        <p className="text-dark-gray font-inter">{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
