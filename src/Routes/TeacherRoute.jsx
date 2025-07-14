import useRole from "@/Hooks/useRole";
import React from "react";
import { Navigate } from "react-router";
import { MoonLoader } from "react-spinners";

const TeacherRoute = ({ children }) => {
  const [role, roleLoading] = useRole();

  if (roleLoading) {
    return <MoonLoader size={30}/>;
  }

  if (role === "teacher") {
    return children;
  }
  return <Navigate to={"/"}></Navigate>;
};

export default TeacherRoute;
