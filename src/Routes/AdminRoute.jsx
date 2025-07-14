import useRole from "@/Hooks/useRole";
import React from "react";
import { Navigate } from "react-router";

const AdminRoute = ({ children }) => {
  const [role] = useRole();
  if (role === "admin") {
    return children;
  }
  return <Navigate to={'/'}></Navigate>;
};

export default AdminRoute;
