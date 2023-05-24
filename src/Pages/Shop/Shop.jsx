import PageCover from "../Shared/PageCover/PageCover";
import bannerImg from "../../assets/shop/banner2.jpg";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useMenu } from "../../Hooks/useMenu";
import MenuCard from "../Shared/MenuCard/MenuCard";
import { Helmet } from "react-helmet-async";

const Shop = () => {
  const { category } = useParams();
  const categories = ["Salad", "Pizza", "Soups", "Dessert", "Drinks"];
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menus] = useMenu();
  const desert = menus.filter((menu) => menu.category === "dessert");
  const pizza = menus.filter((menu) => menu.category === "pizza");
  const salad = menus.filter((menu) => menu.category === "salad");
  const soup = menus.filter((menu) => menu.category === "soup");
  const drinks = menus.filter((menu) => menu.category === "drinks");
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <PageCover
        heading={"OUR SHOP"}
        subHeading={"Would you like to try a dish?"}
        img={bannerImg}
      />
      <section>
        <div className="container">
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList>
              <Tab>Salad</Tab>
              <Tab>pizza</Tab>
              <Tab>soups</Tab>
              <Tab>desserts</Tab>
              <Tab>drinks</Tab>
            </TabList>

            <TabPanel>
              <div className="grid grid-cols-3 gap-6">
                {salad.map((food) => (
                  <MenuCard food={food} key={food._id} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-3 gap-6">
                {pizza.map((food) => (
                  <MenuCard food={food} key={food._id} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-3 gap-6">
                {soup.map((food) => (
                  <MenuCard food={food} key={food._id} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-3 gap-6">
                {desert.map((food) => (
                  <MenuCard food={food} key={food._id} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-3 gap-6">
                {drinks.map((food) => (
                  <MenuCard food={food} key={food._id} />
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default Shop;
