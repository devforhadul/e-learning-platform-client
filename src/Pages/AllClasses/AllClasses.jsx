import React from "react";
import ClassCard from "../../Components/Shared/Card/ClassCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "@/Components/Shared/LoadingSpinner";
import PaginationSection from "@/Components/AllClasses/PaginationSection";

const AllClasses = () => {
  
  

  const { data: allClass, isPending } = useQuery({
    queryKey: ["allClass"],
    queryFn: async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/all-class`);
      return data;
    },
    
  });

  if (isPending) return <LoadingSpinner />;

  return (
    <div className="p-5 mb-10">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 p-4">
        {allClass?.map(
          (cls) =>
            cls.status === "accepted" && (
              <ClassCard key={cls._id} singleClass={cls} />
            )
        )}
      </div>
      <div className="py-5">
        <PaginationSection/>
      </div>
    </div>
  );
};

export default AllClasses;
