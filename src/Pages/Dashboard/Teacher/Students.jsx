import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import { AuthContext } from "@/Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BadgeInfo } from "lucide-react";
import React, { useContext, useState } from "react";

export default function Students() {
  const invoices = [
    {
      invoice: "abc",
      paymentStatus: "damo@gmail.com",
      totalAmount: "",
      paymentMethod: "d",
    },
    {
      invoice: "cab",
      paymentStatus: "forhad@gmail.com",
      totalAmount: "",
      paymentMethod: "d",
    },
  ];
  const { user } = useContext(AuthContext);

  // const { data: users, isPending } = useQuery({
  //   queryKey: ["students"],
  //   queryFn: async () => {
  //     const { data } = await axios(
  //       `${import.meta.env.VITE_API_URL}/students/${user?.email}`
  //     );
  //     return data;
  //   },
  // });

  // console.log(users);

  return (
    <div className="border p-2 rounded-sm">
      <Table>
        <TableCaption>A list of your course Enrollmend.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Student Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Enrolled Course</TableHead>
            <TableHead>See Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-center">
               <BadgeInfo />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
