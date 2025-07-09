import React from "react";
import Sidebar from "../Components/Dashboard/Sidebar/Sidebar";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  

  return (
    <div className="h-screen grid grid-cols-12 ">
      <div className="col-span-2 border-r border-gray-200 p-3">
        <Sidebar />
      </div>
      <div className="col-span-10 p-3">
        <div className="p-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
