import React from "react";
import Navbar from "../Components/Shared/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "@/Components/Shared/Footer/Footer";
import TopBar from "@/Components/Shared/Navbar/TopBar";

const MainLayout = () => {
  return (
    <div className="">
      <div className="">
        <TopBar/>
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
