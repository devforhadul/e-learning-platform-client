import CourseAnalitcs from "@/Components/Dashboard/Charts/CourseAnalitcs";
import { Card } from "@/Components/ui/card";
import { AuthContext } from "@/Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";

const DashBoard = () => {
  const { user } = useContext(AuthContext);

  // const { data: sigleTeachReq } = useQuery({
  //   queryKey: ["AllUser"],
  //   queryFn: async () => {
  //     const { data } = await axios(
  //       `${import.meta.env.VITE_API_URL}/single-teach-req/${user?.email}`
  //     );
  //     return data;
  //   },
  // });

  return (
    <div>
      <div>
        <div className="grid grid-cols-2  lg:grid-cols-4 gap-3 ">
          <Card className={"gap-3"}>
            <p className="text-center text-xl font-medium">Total Course</p>
            <p className="text-3xl font-bold text-center">{13}</p>
          </Card>
          <Card className={"gap-3"}>
            <p className="text-center text-xl font-medium">Total Student</p>
            <p className="text-3xl font-bold text-center">{50}</p>
          </Card>
          <Card className={"gap-3"}>
            <p className="text-center text-xl font-medium">Total Revienue</p>
            <p className="text-3xl font-bold text-center">{56}K+</p>
          </Card>
          <Card className={"gap-3"}>
            <p className="text-center text-xl font-medium">Average Progress</p>
            <p className="text-3xl font-bold text-center">{96}%</p>
          </Card>
        </div>
      </div>
      <CourseAnalitcs/>
    </div>
  );
};

export default DashBoard;
