import AssignmentTable from "@/Components/Dashboard/TableRow/AssignmentTable";
import AssignmentCreateModal from "@/Components/Modal/AssignmentCreateModal";
import { Button } from "@/Components/ui/button";
import { Card, CardTitle } from "@/Components/ui/card";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import { useParams } from "react-router";

const TeacherClassDetails = () => {
  const { id } = useParams();
  const [assignmentModal, setAssignmentModal] = useState(false);

  const { data: myClass } = useQuery({
    queryKey: ["teacherClassDetails", id],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/teach-class-detils/${id}`
      );
      return data;
    },
    enabled: !!id,
  });

  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        <Card className={"gap-3"}>
          <p className="text-3xl font-bold text-center">
            {myClass?.totalEnroll}
          </p>
          <p className="text-center text-xl font-medium">Total Enroll</p>
        </Card>
        <Card className={"gap-3"}>
          <p className="text-3xl font-bold text-center">
            {myClass?.assignments?.length}
          </p>
          <p className="text-center text-xl font-medium">Total Assignment</p>
        </Card>
        <Card className={"gap-3"}>
          <p className="text-3xl font-bold text-center">unknow</p>
          <p className="text-center text-xl font-medium">Total Submission</p>
        </Card>
      </div>
      {/* Add assignment button */}
      <div className="py-5">
        <Button
          variant="secondary"
          size="lg"
          className={"cursor-pointer"}
          onClick={() => setAssignmentModal(true)}
        >
          <Plus />
          Create Assignment
        </Button>
        <AssignmentCreateModal
          open={assignmentModal}
          onOpenChange={setAssignmentModal}
          classDetails={myClass}
        />
      </div>
      {/* Assignment table */}
      <div>
        <h3 className="text-xl font-semibold mb-1">Your Added Assignments</h3>
        {myClass?.assignments?.length > 0 ? (
          <AssignmentTable classData={myClass} />
        ) : (
          <p className="text-center">Not Assignment Found</p>
        )}
      </div>
    </div>
  );
};

export default TeacherClassDetails;
