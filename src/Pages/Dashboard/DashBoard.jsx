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
        <div className="grid grid-cols-4 gap-3 ">
          <Card className={"gap-3"}>
            <p className="text-center text-xl font-medium">Total Course</p>
            <p className="text-3xl font-bold text-center">{0}</p>
          </Card>
          <Card className={"gap-3"}>
            <p className="text-center text-xl font-medium">Total Student</p>
            <p className="text-3xl font-bold text-center">{0}</p>
          </Card>
          <Card className={"gap-3"}>
            <p className="text-center text-xl font-medium">Total Revienue</p>
            <p className="text-3xl font-bold text-center">{0}</p>
          </Card>
          <Card className={"gap-3"}>
            <p className="text-center text-xl font-medium">Average Progress</p>
            <p className="text-3xl font-bold text-center">{0}</p>
          </Card>
        </div>
      </div>
      
    </div>
  );
};

export default DashBoard;
