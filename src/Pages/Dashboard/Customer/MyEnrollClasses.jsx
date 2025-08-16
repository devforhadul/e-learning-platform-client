import EnrolledClassCard from "@/Components/Shared/Card/EnrolledCourseCard";
import FullSpinner from "@/Components/Shared/FullSpinner";
import { AuthContext } from "@/Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { useLocation } from "react-router";

const MyEnrollClasses = () => {
  const { user } = useContext(AuthContext);
  const { pathname } = useLocation();

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

  if (isLoading) return <FullSpinner />;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        {pathname === "/dashboard" ? "Recend course" : " My Enroll classes"}
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
