import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
