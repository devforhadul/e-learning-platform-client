import useRole from "@/Hooks/useRole";
import React from "react";
import { Navigate } from "react-router";

const TeacherRoute = ({ children }) => {
  const [role] = useRole();
  if (role === "teacher") {
    return children;
  }
  return <Navigate to={"/"}></Navigate>;
};

export default TeacherRoute;
