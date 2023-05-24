import React from "react";
import { Parallax } from "react-parallax";

const PageCover = ({ heading, subHeading, img }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="Page Background Img"
      strength={-200}
    >
      <section className="hero h-[800px]">
        <div className="container bg-neutral bg-opacity-60 text-white py-36">
          <div className="text-center font-cinzel font-bold">
            <h1 className="mb-2 text-[88px] uppercase">{heading}</h1>
            <p className="text-2xl">{subHeading}</p>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default PageCover;
