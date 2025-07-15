import StudentAssignmentTable from "@/Components/Dashboard/TableRow/StudentAssignmentTable";
import TeacherReportModal from "@/Components/Modal/TeacherReportModal";
import { Button } from "@/Components/ui/button";
import { AuthContext } from "@/Providers/AuthProvider";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineRateReview } from "react-icons/md";
import { useParams } from "react-router";
import { MoonLoader } from "react-spinners";

const StudentClassDetails = () => {
  const { id } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const { user } = useContext(AuthContext);

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

  const { mutate } = useMutation({
    mutationFn: async (assignment) => {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/assignment-data`,
        assignment
      );
      return data;
    },
    onSuccess: (res) => {
      toast.success("Assignment submit successfully");
      console.log(res);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmit = (classId, assignmentText, clsTitle) => {
    const assignmentDatda = {
      classId,
      assignmentTitle: clsTitle,
      studentEmail: user?.email,
      submissionData: assignmentText,
      submittedAt: new Date(),
    };
    mutate(assignmentDatda);
    assignmentText(null);
  };

  if (isPending) return <MoonLoader />;

  return (
    <div>
      <div className="mb-5">
        <h3 className="text-3xl font-bold mb-3">Course Details</h3>
        <Button
          onClick={() => setOpenModal(true)}
          className={"cursor-pointer font-semibold"}
          variant="secondary"
        >
          <MdOutlineRateReview />
          Teaching Evaluation Report (TER)
        </Button>
        <TeacherReportModal
          open={openModal}
          onOpenChange={setOpenModal}
          classInfo={classInfo}
          setOpenModal={setOpenModal}
        />
      </div>
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
