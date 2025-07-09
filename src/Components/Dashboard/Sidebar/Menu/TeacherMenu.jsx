import React from "react";
import MenuItem from "./MenuItem";

const TeacherMenu = () => {
  return (
    <>
      <MenuItem label={"Add Class"} address={"/dashboard/teach-add-class"} />
      <MenuItem label={"My Class"} address={"/dashboard/teach-my-class"} />
    </>
  );
};

export default TeacherMenu;
