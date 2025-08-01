import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import LoadingSpinner from "../Components/Shared/LoadingSpinner";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <LoadingSpinner />;
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
