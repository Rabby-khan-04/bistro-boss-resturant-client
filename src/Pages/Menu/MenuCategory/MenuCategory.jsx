import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ menus }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-12">
      {menus.map((menu) => (
        <MenuItem menu={menu} key={menu._id} />
      ))}
    </div>
  );
};

export default MenuCategory;
