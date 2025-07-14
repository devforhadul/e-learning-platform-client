import { Button } from "@/Components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import React from "react";

const StudentAssignmentTable = ({ classInfo , handleSubmit}) => {


  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Deadline</TableHead>
          <TableHead>Submission Status</TableHead>
        </TableRow>
      </TableHeader>
      {/* Table body */}
      <TableBody>
        {classInfo?.assignments?.map((assignment, idx) => (
          <TableRow key={idx}>
            <TableCell>{assignment?.title}</TableCell>
            <TableCell>{assignment?.description}</TableCell>
            <TableCell>{assignment?.deadline}</TableCell>
            <TableCell>
                <Button onClick={()=>handleSubmit(classInfo?._id)}>Submit Now</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StudentAssignmentTable;
