import React, { useContext } from "react";
import MenuItem from "./Menu/MenuItem";
import { Link } from "react-router";
import useRole from "../../../Hooks/useRole";

import Button from "../../Shared/Button/Button";
import { AuthContext } from "../../../Providers/AuthProvider";
import AdminMenu from "./Menu/AdminMenu";
import TeacherMenu from "./Menu/TeacherMenu";
import CustomerMenu from "./Menu/CustomerMenu";

const Sidebar = () => {
  const [role, roleLoading] = useRole();
  const { logOut } = useContext(AuthContext);

  return (
    <div className="flex justify-between flex-col">
      <div className="text-center">
        <Link to={"/"}>
          <h2 className="text-2xl font-semibold">Learnisty</h2>
        </Link>
        <p className="uppercase">{role}</p>
      </div>

      <div>
        {role === "admin" && <AdminMenu />}

        {role === "teacher" && <TeacherMenu />}

        {role === "customer" && <CustomerMenu />}
      </div>

      <div>
        <MenuItem label={"Profile"} address={"/dashboard/my-profile"} />
        <Button label={"Logout"} onClick={logOut} />
      </div>
    </div>
  );
};

export default Sidebar;
