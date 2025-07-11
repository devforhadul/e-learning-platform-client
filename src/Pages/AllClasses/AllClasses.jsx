import React, { useEffect, useState } from "react";
import ClassCard from "../../Components/Shared/Card/ClassCard";
import axios from "axios";

const AllClasses = () => {
  const [allClass, setAllClass] = useState([]);

  useEffect(() => {
    const fetchAllClass = async () => {
      try {
        const res = await axios(`${import.meta.env.VITE_API_URL}/all-class`);
        setAllClass(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllClass();
  }, []);

  console.log(allClass);

  return (
    <div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 p-4">
        {allClass.map(
          (cls) =>
            cls.status === "accepted" && (
              <ClassCard key={cls._id} singleClass={cls} />
            )
        )}
      </div>
    </div>
  );
};

export default AllClasses;
