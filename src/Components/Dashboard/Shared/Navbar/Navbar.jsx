import { SidebarTrigger } from "@/Components/ui/sidebar";
import React from "react";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex justify-between items-center">
        <div>
          <SidebarTrigger />
        </div>
        <div>right</div>
      </div>
    </div>
  );
};

export default Navbar;
