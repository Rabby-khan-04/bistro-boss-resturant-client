import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import ChefService from "../ChefService/ChefService";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <ChefService />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </>
  );
};

export default Home;
