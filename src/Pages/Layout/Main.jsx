import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";

const Main = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
