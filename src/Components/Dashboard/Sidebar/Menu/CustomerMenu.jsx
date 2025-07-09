import React from "react";
import { MdOutlineClass } from "react-icons/md";
import MenuItem from "./MenuItem";

const CustomerMenu = () => {
  return (
    <>
      <MenuItem
        label={"My Enroll class"}
        address={"/dashboard/my-classes"}
        icon={MdOutlineClass}
      />
    </>
  );
};

export default CustomerMenu;
