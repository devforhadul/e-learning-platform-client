import React, { useState } from "react";
import ClassCard from "../../Components/Shared/Card/CourseCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import PaginationSection from "@/Components/AllClasses/PaginationSection";
import { Skeleton } from "@/Components/ui/skeleton";
import Container from "@/Components/Shared/Container";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import FullSpinner from "@/Components/Shared/FullSpinner";

const AllClasses = () => {
  const [page, setPage] = useState(1);
  const [filterValue, setFilterValue] = useState('default');
  const limitPerPage = 9;



  const { data: paginationData, isPending } = useQuery({
    queryKey: ["pagination-cls", page, filterValue],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL
        }/pagination-class?page=${page}&limit=${limitPerPage}&filter=${filterValue}`
      );
      return data;
    },
    
  });


  console.log(filterValue);

  console.log(paginationData);

  return (
    <Container>
      <div className="py-5">
        {/* Accending decending */}
        <div className="flex items-center justify-between my-5">
          <div>
            <h5 className="text-2xl font-bold text-Secondry">Our Courses</h5>
          </div>
          <div>
            <Select onValueChange={(v) => setFilterValue(v)}>
              <SelectTrigger className="w-[180px] border-0">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent >
                <SelectItem value="h-to-l">Price high to low</SelectItem>
                <SelectItem value="l-to-h">Price low to high</SelectItem>
                {/* <SelectItem value="system">System</SelectItem> */}
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* Course Cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5">
          {isPending
            ? Array.from({ length: 9 }).map((_, index) => (
              <Skeleton key={index} className="h-[300px] w-full rounded-xl" />
            ))
            : paginationData?.showCourse?.map(
              (cls) =>
                cls.status === "accepted" && (
                  <ClassCard key={cls._id} singleClass={cls} />
                )
            )}
        </div>

        <div className="py-5">
          <PaginationSection
            setPage={setPage}
            page={page}
            totalPages={paginationData?.totalPages}
          />
        </div>
      </div>
    </Container>
  );
};

export default AllClasses;
