import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img1 from "./../../../assets/home/slide1.jpg";
import img2 from "./../../../assets/home/slide2.jpg";
import img3 from "./../../../assets/home/slide3.jpg";

const Recommends = () => {
  return (
    <section className="pb-32">
      <div className="container">
        <div>
          <SectionTitle heading={"CHEF RECOMMENDS"} subHeading={"Should Try"} />
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <img
              src={img1}
              className="w-full h-80 object-cover object-center"
              alt=""
            />
            <div className="bg-[#F3F3F3] py-8 px-10 font-inter text-center text-neutral">
              <h2 className="text-2xl font-bold font-cinzel">Caeser Salad</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <button className="golden__btn mt-6">Add To Cart</button>
            </div>
          </div>
          <div>
            <img
              src={img2}
              className="w-full h-80 object-cover object-center"
              alt=""
            />
            <div className="bg-[#F3F3F3] py-8 px-10 font-inter text-center text-neutral">
              <h2 className="text-2xl font-bold font-cinzel">Caeser Pizza</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <button className="golden__btn__active mt-6">Add To Cart</button>
            </div>
          </div>
          <div>
            <img
              src={img3}
              className="w-full h-80 object-cover object-center"
              alt=""
            />
            <div className="bg-[#F3F3F3] py-8 px-10 font-inter text-center text-neutral">
              <h2 className="text-2xl font-bold font-cinzel">Caeser Soups</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <button className="golden__btn mt-6">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommends;
