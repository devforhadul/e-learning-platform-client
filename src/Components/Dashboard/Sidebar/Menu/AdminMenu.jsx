import React from "react";
import MenuItem from "./MenuItem";

const AdminMenu = () => {
  return (
    <>
      <MenuItem label={"Teach Request"} address={"/dashboard/teach-req"} />
      <MenuItem label={"All Class"} address={"/dashboard/all-class"} />
      <MenuItem label={"Users"} address={"/dashboard/users"} />
    </>
  );
};

export default AdminMenu;
