import { AuthContext } from "@/Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";

const DashBoard = () => {
  const { user } = useContext(AuthContext);

  const { data: sigleTeachReq } = useQuery({
    queryKey: ["AllUser"],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/single-teach-req/${user?.email}`
      );
      return data;
    },
  });

  return (
    <div>
      <p>
        Welcome{" "}
        <span className="text-xl font-semibold">{user?.displayName}</span>,{" "}
      </p>

      {sigleTeachReq && (
        <p className="capitalize">
          You Teacher Request: {sigleTeachReq?.status}
        </p>
      )}
    </div>
  );
};

export default DashBoard;
