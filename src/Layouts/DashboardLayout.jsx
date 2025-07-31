import React from "react";
import Sidebar from "../Components/Dashboard/Sidebar/Sidebar";
import { Outlet } from "react-router";
import Navbar from "@/Components/Dashboard/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <div className="relative min-h-screen md:flex bg-white">
        {/* Left Side: Sidebar Component */}
        <Sidebar />
        {/* Right Side: Dashboard Dynamic Content */}
        <div className="flex-1  md:ml-64">
          <div className="p-3">
            {/* Outlet for dynamic contents */}
            <Navbar />
            <Outlet />
          </div>
        </div>
      </div>
    </div>

    // <div className="h-screen grid grid-cols-12 ">
    //   <div className="col-span-2 border-r border-gray-200 p-3">
    //     <Sidebar />
    //   </div>
    //   <div className="col-span-10 p-3">
    //     <div className="p-3">
    //       <Outlet />
    //     </div>
    //   </div>
    // </div>
  );
};

export default DashboardLayout;
