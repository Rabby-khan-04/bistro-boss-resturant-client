import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import SectionCover from "../../Shared/SectionCover/SectionCover";
import { Link } from "react-router-dom";

const MenuCategory = ({ menus, img, heading, subHeading }) => {
  return (
    <>
      {heading && (
        <SectionCover img={img} heading={heading} subHeading={subHeading} />
      )}
      <section className="pt-28 pb-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {menus.map((menu) => (
              <MenuItem menu={menu} key={menu._id} />
            ))}
          </div>
          <div className="text-center">
            <Link to={`/shop/${heading}`} className="black__btn">
              ORDER YOUR FAVOURITE FOOD
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuCategory;
