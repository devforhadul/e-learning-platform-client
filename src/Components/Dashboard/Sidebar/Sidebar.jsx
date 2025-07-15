import React, { useContext } from "react";
import MenuItem from "./Menu/MenuItem";
import { Link } from "react-router";
import useRole from "../../../Hooks/useRole";
import { AuthContext } from "../../../Providers/AuthProvider";
import AdminMenu from "./Menu/AdminMenu";
import TeacherMenu from "./Menu/TeacherMenu";
import CustomerMenu from "./Menu/CustomerMenu";
import { LogOut, UserRoundPen } from "lucide-react";
import { MoonLoader } from "react-spinners";
import { Button } from "@/Components/ui/button";
import { Confirm } from "notiflix";

const Sidebar = () => {
  const [role, roleLoading] = useRole();
  const { logOut } = useContext(AuthContext);

  const handleLogout = () => {
    Confirm.show("Logout Confirmation", "Are you sure?", "Yes", "No", () => {
      logOut();
    }),
      () => {};
  };

  if (roleLoading) return <MoonLoader />;

  return (
    <div className="flex justify-between flex-col">
      <div className="text-center">
        <Link to={"/"}>
          <h2 className="text-2xl font-semibold">Learnisty</h2>
        </Link>
        <p className="uppercase">{role}</p>
      </div>

      <div className="">
        {role === "admin" && <AdminMenu />}

        {role === "teacher" && <TeacherMenu />}

        {role === "customer" && <CustomerMenu />}
      </div>

      <div>
        <MenuItem
          label={"Profile"}
          address={"/dashboard/my-profile"}
          icon={UserRoundPen}
        />

        <Button className={"w-full "} onClick={handleLogout}>
          <LogOut /> Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
