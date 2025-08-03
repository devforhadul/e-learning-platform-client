import StudentAssignmentTable from "@/Components/Dashboard/TableRow/StudentAssignmentTable";
import TeacherReportModal from "@/Components/Modal/TeacherReportModal";
import FullSpinner from "@/Components/Shared/FullSpinner";
import { Button } from "@/Components/ui/button";
import { AuthContext } from "@/Providers/AuthProvider";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineRateReview } from "react-icons/md";
import { useParams } from "react-router";
import CourseLesson from "./CourseLesson";

const StudentClassDetails = () => {
  const { id } = useParams();
  //const [openModal, setOpenModal] = useState(false);
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

  if (isPending) return <FullSpinner />;

  return (
    <div>
      <div className="mb-5">
        <h3 className="text-lg lg:text-2xl  font-bold mb-3">{classInfo?.title}</h3>
        {/* Class lesson */}
        <CourseLesson classInfo={classInfo} handleSubmit={handleSubmit} />
        {/* TER Button */}
        {/* <Button
          onClick={() => setOpenModal(true)}
          className={"cursor-pointer font-semibold"}
          variant="secondary"
        >
          <MdOutlineRateReview />
          Teaching Evaluation Report (TER)
        </Button> */}
        {/* <TeacherReportModal
          open={openModal}
          onOpenChange={setOpenModal}
          classInfo={classInfo}
          setOpenModal={setOpenModal}
        /> */}
      </div>
    </div>
  );
};

export default StudentClassDetails;
