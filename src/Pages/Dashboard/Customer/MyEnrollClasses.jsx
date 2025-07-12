import LoadingSpinner from "@/Components/Shared/LoadingSpinner";
import { AuthContext } from "@/Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";

const MyEnrollClasses = () => {
  const { user } = useContext(AuthContext);

  const { data, isLoading } = useQuery({
    queryKey: ["enrollClass"],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/enrolled/${user?.email}`
      );
      return data;
    },
  });

  console.log(data)

  if (isLoading) return <LoadingSpinner />;

  return <div>My Enroll classes ({data?.length})</div>;
};

export default MyEnrollClasses;
