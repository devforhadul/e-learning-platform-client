import React, { useContext } from "react";
import MenuItem from "./Menu/MenuItem";
import { Link } from "react-router";
import useRole from "../../../Hooks/useRole";
import { AuthContext } from "../../../Providers/AuthProvider";
import AdminMenu from "./Menu/AdminMenu";
import TeacherMenu from "./Menu/TeacherMenu";
import CustomerMenu from "./Menu/CustomerMenu";
import { LogOut, UserRoundPen } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Confirm } from "notiflix";
import { AiOutlineBars } from "react-icons/ai";
import FullSpinner from "@/Components/Shared/FullSpinner";
import { Settings } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/Components/ui/sidebar";

const DashSidebar = () => {
  const [role, roleLoading] = useRole();
  const { logOut } = useContext(AuthContext);

  const handleLogout = () => {
    Confirm.show("Logout Confirmation", "Are you sure?", "Yes", "No", () => {
      logOut();
    }),
      () => {};
  };



  if (roleLoading) return <FullSpinner />;

  return (
    <Sidebar className={""}>
      <SidebarHeader className={'px-2'}>
        <div className="w-full hidden md:flex px-4 py-2 text-2xl font-bold rounded-lg  items-center  ">
          <Link to="/">Learnisty</Link>
        </div>
      </SidebarHeader>
      <SidebarContent className={'px-2'}>
        <nav>
          {/*  Menu Items */}
          <MenuItem
            label={"Overview"}
            address={"/dashboard"}
            icon={LayoutDashboard}
          />
          {role === "admin" && <AdminMenu />}

          {role === "teacher" && <TeacherMenu />}

          {role === "customer" && <CustomerMenu />}
        </nav>
      </SidebarContent>
      <SidebarFooter className={'px-2'}>
        <div>
          <hr />
          <MenuItem
            label={"Settings"}
            address={"/dashboard/settings"}
            icon={Settings}
          />

          <MenuItem
            label={"Profile"}
            address={"/dashboard/my-profile"}
            icon={UserRoundPen}
          />

          <Button className={"w-full "} onClick={handleLogout}>
            <LogOut /> Logout
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashSidebar;
