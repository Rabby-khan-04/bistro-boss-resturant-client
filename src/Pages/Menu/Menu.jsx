import React from "react";
import { Helmet } from "react-helmet-async";
import PageCover from "../Shared/PageCover/PageCover";
import bannerImg from "../../assets/menu/banner3.jpg";
import desertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import SectionCover from "../Shared/SectionCover/SectionCover";
import { useMenu } from "../../Hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menus] = useMenu();
  const desert = menus.filter((menu) => menu.category === "dessert");
  const pizza = menus.filter((menu) => menu.category === "pizza");
  const salad = menus.filter((menu) => menu.category === "salad");
  const soup = menus.filter((menu) => menu.category === "soup");
  const offered = menus.filter((menu) => menu.category === "offered");

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <PageCover
        img={bannerImg}
        heading={"OUR MENU"}
        subHeading={"Would you like to try a dish?"}
      />
      <section className="pt-32 pb-11">
        <div className="container">
          <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"} />
          <MenuCategory menus={offered} />
          <div className="text-center">
            <button className="black__btn">ORDER YOUR FAVOURITE FOOD</button>
          </div>
        </div>
      </section>
      <SectionCover
        img={desertImg}
        heading={"DESSERTS"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <section className="pt-28 pb-12">
        <div className="container">
          <MenuCategory menus={desert} />
          <div className="text-center">
            <button className="black__btn">ORDER YOUR FAVOURITE FOOD</button>
          </div>
        </div>
      </section>
      <SectionCover
        img={pizzaImg}
        heading={"DESSERTS"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
    </>
  );
};

export default Menu;
