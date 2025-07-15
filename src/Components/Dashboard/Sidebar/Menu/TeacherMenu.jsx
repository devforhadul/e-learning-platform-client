import React from "react";
import MenuItem from "./MenuItem";
import { CirclePlus } from "lucide-react";
import { MdOutlinePlayLesson } from "react-icons/md";

const TeacherMenu = () => {
  return (
    <>
      <MenuItem label={"Add Class"} address={"/dashboard/teach-add-class"} icon={CirclePlus} />
      <MenuItem label={"My Class"} address={"/dashboard/teach-my-class"} icon={MdOutlinePlayLesson}/>
    </>
  );
};

export default TeacherMenu;
