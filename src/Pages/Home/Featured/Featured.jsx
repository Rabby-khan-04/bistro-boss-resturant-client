import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <section className="py-32 bg-featured-img bg-no-repeat bg-cover bg-center bg-[#00000099] bg-blend-multiply bg-fixed">
      <div className="container">
        <div>
          <SectionTitle
            heading={"FEATURED ITEM"}
            subHeading={"Check it out"}
            color={"white"}
          />
        </div>
        <div className="grid grid-cols-2 gap-16">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="font-inter self-center text-white">
            <div className="space-y-2">
              <p className="text-xl">March 20, 2023</p>
              <h2 className="text-2xl">WHERE CAN I GET SOME?</h2>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
            </div>
            <button className="white__btn mt-6">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
