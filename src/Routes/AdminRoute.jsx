import useRole from "@/Hooks/useRole";
import React from "react";
import { Navigate } from "react-router";
import { MoonLoader } from "react-spinners";

const AdminRoute = ({ children }) => {
  const [role, roleLoading] = useRole();


  if (roleLoading) {
    return <MoonLoader size={30} />;
  }
  

  if (role === "admin") {
    return children;
  }
  return <Navigate to={"/"}></Navigate>;
};

export default AdminRoute;
