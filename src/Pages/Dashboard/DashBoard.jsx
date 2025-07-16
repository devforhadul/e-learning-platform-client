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

  console.log(sigleTeachReq);

  return (
    <div>
      <p>
        Teacher Request Status:{" "}
        {sigleTeachReq?.status === "teacher"
          ? "You are a teacher now"
          : "Request to Another"}{" "}
      </p>
    </div>
  );
};

export default DashBoard;
