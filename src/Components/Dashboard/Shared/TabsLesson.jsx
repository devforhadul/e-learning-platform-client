import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import React from "react";
import AssignmentTable from "../TableRow/AssignmentTable";
import StudentAssignmentTable from "../TableRow/StudentAssignmentTable";
import { Button } from "@/Components/ui/button";
import { FaRegNoteSticky } from "react-icons/fa6";
import { MdQuiz, MdOutlineSource, MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { GrOverview } from "react-icons/gr";

export default function TabsLesson({ classInfo, handleSubmit }) {
  return (
    <div>
      <Tabs defaultValue="overview" className={"w-full "}>
        <TabsList className={"w-full"}>
          <TabsTrigger value="overview"><GrOverview /> Overview</TabsTrigger>
          <TabsTrigger value="assignment"><MdOutlineAssignmentTurnedIn /> Assignment</TabsTrigger>
          <TabsTrigger value="notes"><FaRegNoteSticky /> Notes</TabsTrigger>
          <TabsTrigger value="resource"><MdOutlineSource /> Resource</TabsTrigger>
          <TabsTrigger value="quiz"><MdQuiz /> Quiz</TabsTrigger>
        </TabsList>
        {/* OverVIew */}
        <TabsContent value="overview">
          <h5 className="my-2 text-md lg:text-lg text-gray-900 font-bold">
            Current Lesson: {classInfo?.title}
          </h5>
          <p>{classInfo?.description}</p>
        </TabsContent>
        {/* Assignment */}
        <TabsContent value="assignment">
          <h3 className="text-xl font-semibold mb-1">Assignments:</h3>
          {classInfo?.assignments?.length > 0 ? (
            <StudentAssignmentTable
              classInfo={classInfo}
              handleSubmit={handleSubmit}
            />
          ) : (
            <div className="flex justify-center items-center">
              <p className="text-center ">Not Assignment Found</p>
            </div>
          )}
        </TabsContent>
        {/* Notes */}
        <TabsContent value="notes">
          <h5 className="my-2 text-lg text-gray-900 font-bold">Notes here</h5>
          <Button>Save</Button>
        </TabsContent>
        {/* Resource */}
        <TabsContent value="resource">
          <h5 className="my-2 text-lg text-gray-900 font-bold">
            resource here
          </h5>
        </TabsContent>
        {/* Quiz */}
        <TabsContent value="quiz">
          <h5 className="my-2 text-lg text-gray-900 font-bold">Coming Soon...</h5>
         
        </TabsContent>
      </Tabs>
    </div>
  );
}
