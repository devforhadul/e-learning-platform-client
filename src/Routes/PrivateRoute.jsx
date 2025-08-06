import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

import { Navigate, useLocation } from "react-router";
import FullSpinner from "@/Components/Shared/FullSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <FullSpinner />;
  if (user) return children;
  return (
    <Navigate
      to={"/login"}
      state={{ from: location }}
      replace="true"
    ></Navigate>
  );
};

export default PrivateRoute;
