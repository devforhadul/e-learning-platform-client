import React from "react";
import Navbar from "../Components/Shared/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "@/Components/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="">
      <div className="">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
