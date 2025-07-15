import React from "react";
import MenuItem from "./MenuItem";
import { MdOutlinePlayLesson } from "react-icons/md";
import { Users } from "lucide-react";
import { MdOutlinePendingActions } from "react-icons/md";


const AdminMenu = () => {
  return (
    <>
      <MenuItem label={"Teach Request"} address={"/dashboard/teach-req"} icon={MdOutlinePendingActions} />
      <MenuItem label={"All Class"} address={"/dashboard/all-class"} icon={MdOutlinePlayLesson}/>
      <MenuItem label={"Users"} address={"/dashboard/users"} icon={Users} />
    </>
  );
};

export default AdminMenu;
