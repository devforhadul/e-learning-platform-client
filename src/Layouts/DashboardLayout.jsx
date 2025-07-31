import React from "react";
import { Outlet } from "react-router";
import Navbar from "@/Components/Dashboard/Shared/Navbar/Navbar";
import { SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar";
import DashSidebar from "@/Components/Dashboard/Sidebar/DashSidebar";

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <DashSidebar />
      <main className="w-full">
        <Navbar />
        <div className="p-3">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
