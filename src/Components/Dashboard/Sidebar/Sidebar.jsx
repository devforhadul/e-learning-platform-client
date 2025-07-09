import React from "react";
import MenuItem from "./Menu/MenuItem";
import { Link } from "react-router";
import useRole from "../../../Hooks/useRole";

const Sidebar = () => {
  const [role, roleLoading] = useRole();
  console.log(role);

  return (
    <div className="">
      <div>
        <Link to={"/"}>
          <h2 className="text-2xl font-semibold">Learnisty</h2>
        </Link>
        <p>User Type: {role}</p>
      </div>

      {role === "customer" && (
        <MenuItem label={"My Enroll class"} address={"/dashboard/my-classes"} />
      )}

      {role === "admin" && (
        <MenuItem label={"Users"} address={"/dashboard/users"} />
      )}

      {role === "teacher" && (
        <MenuItem label={"Add Class"} address={"/dashboard/teach-add-class"} />
      )}
    </div>
  );
};

export default Sidebar;
