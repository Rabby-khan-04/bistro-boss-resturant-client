import React from "react";
import { Parallax } from "react-parallax";

const SectionCover = ({ heading, subHeading, img }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="Page Background Img"
      strength={-50}
    >
      <section
        className="hero h-[700px] bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url("${img}")`,
        }}
      >
        <div className="max-w-5xl mx-auto bg-neutral bg-opacity-60 text-white py-28 px-32">
          <div className="text-center ">
            <h1 className="mb-2 text-5xl uppercase font-cinzel font-medium">
              {heading}
            </h1>
            <p className="text-base font-medium font-inter">{subHeading}</p>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default SectionCover;
