import React, { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "@/Components/Dashboard/Shared/Navbar/Navbar";
import { SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar";
import DashSidebar from "@/Components/Dashboard/Sidebar/DashSidebar";

const DashboardLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  return (
    <div className="bg-gray-100">
      <SidebarProvider open={openSidebar} onOpenChange={setOpenSidebar}>
        <DashSidebar />
        <main className="w-full p-4  border m-1.5 rounded-xl bg-white">
          <SidebarTrigger className={'md:hidden'}/>
          
          <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
          <div className="">
            <Outlet />
          </div>
        </main>
        
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
