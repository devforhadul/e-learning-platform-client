import React from "react";
import MenuItem from "./MenuItem";
import { MdOutlinePlayLesson } from "react-icons/md";
import { Users } from "lucide-react";
import { MdOutlinePendingActions } from "react-icons/md";
import { TbDeviceAnalytics } from "react-icons/tb";

const AdminMenu = () => {
  return (
    <>
      <MenuItem
        label={"Courses"}
        address={"/dashboard/courses"}
        icon={MdOutlinePlayLesson}
      />
      <MenuItem
        label={"Analitycs"}
        address={"/dashboard/anyalitycs"}
        icon={TbDeviceAnalytics}
      />
      <MenuItem
        label={"Teach Request"}
        address={"/dashboard/teach-req"}
        icon={MdOutlinePendingActions}
      />
      <MenuItem label={"Users"} address={"/dashboard/users"} icon={Users} />
    </>
  );
};

export default AdminMenu;
