import React, { useContext } from "react";
import Navbar from "../Components/Shared/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "@/Components/Shared/Footer/Footer";
import TopBar from "@/Components/Shared/Navbar/TopBar";
import { AuthContext } from "@/Providers/AuthProvider";

const MainLayout = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="">
      <div className="">
        {!user && <TopBar />}
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
