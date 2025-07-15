import React from "react";
import { Card } from "../ui/card";
import creative from "../../assets/undraw_creative-flow_t3kz.svg";

const InformationSection = ({ users, allClass }) => {
  const totalEnrollment = allClass?.reduce(
    (acc, curr) => acc + (curr.totalEnroll || 0),
    0
  );

  return (
    <div className="flex gap-5 py-10">
      <div className="grid grid-cols-3 gap-5 items-center">
        <Card className={"gap-3"}>
          <p className="text-2xl font-bold text-center">{users?.length}</p>
          <p className="text-center text-xl font-medium">Total User</p>
        </Card>
        <Card className={"gap-3"}>
          <p className="text-2xl font-bold text-center">{allClass?.length}</p>
          <p className="text-center text-xl font-medium">Total classes</p>
        </Card>
        <Card className={"gap-3"}>
          <p className="text-2xl font-bold text-center">{totalEnrollment}</p>
          <p className="text-center text-xl font-medium">Total enrollment</p>
        </Card>
      </div>
      <div className="w-1/2 items-center justify-center flex">
        <img src={creative} alt="" className="h-60" />
      </div>
    </div>
  );
};

export default InformationSection;
