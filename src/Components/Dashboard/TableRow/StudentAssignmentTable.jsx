import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import { Textarea } from "@/Components/ui/textarea";
import React, { useState } from "react";

const StudentAssignmentTable = ({ classInfo, handleSubmit }) => {

  const [assignmentText, setAssignmentText] = useState('');

  

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Deadline</TableHead>
          <TableHead>Submission Box</TableHead>
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
              <div className="grid w-full gap-3">
                <Label htmlFor="message">Your message</Label>
                <Textarea placeholder="Type your message here." id="message" onChange={(e)=>setAssignmentText(e.target.value)} />
              </div>
            </TableCell>
            <TableCell>
              <Button onClick={() => handleSubmit(classInfo?._id, assignmentText)}>
                Submit Now
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StudentAssignmentTable;
