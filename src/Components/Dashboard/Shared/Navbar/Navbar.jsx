import { Badge } from "@/Components/ui/badge";
import { Input } from "@/Components/ui/input";
import { SidebarTrigger } from "@/Components/ui/sidebar";
import { Bell } from "lucide-react";
import React from "react";
import { GoSidebarCollapse } from "react-icons/go";
import { GoSidebarExpand } from "react-icons/go";

const Navbar = ({ openSidebar, setOpenSidebar }) => {
  return (
    <div className="border-b mb-2 py-2">
      <div className="grid grid-cols-2 justify-between items-center">
        {/* Left side */}
        <div className="flex items-center gap-3">
          <div
            className="hidden md:flex gap-1 items-center cursor-pointer hover:bg-gray-200 p-1 rounded-sm "
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            {openSidebar ? (
              <GoSidebarExpand size={20} />
            ) : (
              <GoSidebarCollapse size={20} />
            )}
            {/* <span className="font-medium">
              {openSidebar ? "Close Sidebar" : "Open Sidebar"}
            </span> */}
          </div>
          <div>
            <Input
              placeholder="Filter emails..."
              value={""}
              onChange={(event) => console.log(event.target.value)}
              className="max-w-2xl"
            />
          </div>
        </div>
        {/* Right side */}
        <div className="flex justify-end">
          <div className="flex items-center">
            <div className="hover:p-1 hover:bg-gray-200 rounded-full">
              <Bell
                className="relative "
                size={20}
              />
            </div>
            {/* <Badge
              className="absolute   h-4 min-w-4 rounded-full px-1 font-mono tabular-nums"
              variant="destructive"
            >
              2
            </Badge> */}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
