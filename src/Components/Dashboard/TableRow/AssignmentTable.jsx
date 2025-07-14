import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import React from "react";

const AssignmentTable = ({ classData }) => {
  console.log(classData);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Descrption</TableHead>
          <TableHead>Deadline</TableHead>
        </TableRow>
      </TableHeader>
      {/* table body */}
      <TableBody>
        {classData?.assignments?.map((assign, idx) => (
          <TableRow key={idx}>
            <TableCell>{assign?.title}</TableCell>
            <TableCell>{assign?.description}</TableCell>
            <TableCell>{assign?.deadline}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AssignmentTable;
