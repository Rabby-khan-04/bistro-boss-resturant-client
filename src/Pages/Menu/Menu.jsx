import React from "react";
import { Helmet } from "react-helmet-async";
import PageCover from "../Shared/PageCover/PageCover";
import bannerImg from "../../assets/menu/banner3.jpg";
import desertImg from "../../assets/menu/dessert-bg.jpeg";
import SectionCover from "../Shared/SectionCover/SectionCover";
import PopularMenu from "../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <section>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <PageCover
        img={bannerImg}
        heading={"OUR MENU"}
        subHeading={"Would you like to try a dish?"}
      />
      <PopularMenu />
      <SectionCover
        img={desertImg}
        heading={"DESSERTS"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
    </section>
  );
};

export default Menu;
