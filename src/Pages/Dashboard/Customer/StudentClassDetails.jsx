import StudentAssignmentTable from "@/Components/Dashboard/TableRow/StudentAssignmentTable";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import { MoonLoader } from "react-spinners";

const StudentClassDetails = () => {
  const { id } = useParams();

  //   GEt Order datadetails data from server
  const { data: orderData } = useQuery({
    queryKey: ["singleClass", id],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/class-detils/${id}`
      );
      return data;
    },
    enabled: !!id,
  });

  //   GEt details data from server
  const { data: classInfo, isPending } = useQuery({
    queryKey: ["singleClass"],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/singleclass/${orderData?.classId}`
      );
      return data;
    },
    enabled: !!orderData?.classId,
  });

  if (isPending) return <MoonLoader />;

  const handleSubmit = (classId) => {
    console.log("Submit button:", classId);
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-1">Assignments</h3>
      {classInfo?.assignments?.length > 0 ? (
        <StudentAssignmentTable
          classInfo={classInfo}
          handleSubmit={handleSubmit}
        />
      ) : (
        <p className="text-center">Not Assignment Found</p>
      )}
    </div>
  );
};

export default StudentClassDetails;
