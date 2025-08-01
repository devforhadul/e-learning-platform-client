import { SidebarTrigger } from "@/Components/ui/sidebar";
import React from "react";
import { GoSidebarCollapse } from "react-icons/go";
import { GoSidebarExpand } from "react-icons/go";

const Navbar = ({ openSidebar, setOpenSidebar }) => {
  return (
    <div className="border-b mb-2 py-1">
      <div className="flex justify-between items-center">
        <div>
          <div
            className="hidden md:flex gap-1 items-center cursor-pointer hover:bg-gray-200 p-1 rounded-sm "
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            {openSidebar ? (
              <GoSidebarExpand size={20} />
            ) : (
              <GoSidebarCollapse size={20} />
            )}
            <span className="font-medium">
              {openSidebar ? "Close Sidebar" : "Open Sidebar"}
            </span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
