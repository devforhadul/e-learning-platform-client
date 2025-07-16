import EnrolledClassCard from "@/Components/Shared/Card/EnrolledClassCard";
import LoadingSpinner from "@/Components/Shared/LoadingSpinner";
import { AuthContext } from "@/Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";

const MyEnrollClasses = () => {
  const { user } = useContext(AuthContext);

  const { data: enrolledClass, isLoading } = useQuery({
    queryKey: ["enrollClass"],
    queryFn: async () => {
      const jwtToken = localStorage.getItem("token");
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/enrolled/${user?.email}`,
        { headers: { Authorization: `Bearer ${jwtToken}` } }
      );
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        My Enroll classes ({enrolledClass?.length})
      </h2>

      <div className="flex flex-col gap-4">
        {enrolledClass.map((course) => (
          <EnrolledClassCard key={course?._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default MyEnrollClasses;
