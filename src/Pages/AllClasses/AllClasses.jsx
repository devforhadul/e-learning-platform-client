import React, { useState } from "react";
import ClassCard from "../../Components/Shared/Card/ClassCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import PaginationSection from "@/Components/AllClasses/PaginationSection";
import FullSpinner from "@/Components/Shared/FullSpinner";
import { Skeleton } from "@/Components/ui/skeleton";

const AllClasses = () => {
  const [page, setPage] = useState(1);
  const limitPerPage = 10;

  const { data: paginationData, isPending } = useQuery({
    queryKey: ["pagination-cls", page],
    queryFn: async () => {
      const { data } = await axios(
        `${
          import.meta.env.VITE_API_URL
        }/pagination-class?page=${page}&limit=${limitPerPage}`
      );
      return data;
    },
  });

  //if (isPending) return <FullSpinner />;

  return (
    <div className="py-10 md:py-16 lg:py-20 ">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 p-4">
        {isPending
          ? Array.from({ length: 9 }).map((_, index) => (
              <Skeleton key={index} className="h-[300px] w-full rounded-xl" />
            ))
          : paginationData?.classes?.map(
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
  );
};

export default AllClasses;
