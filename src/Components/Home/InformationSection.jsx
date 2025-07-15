import React from "react";
import { Card } from "../ui/card";
import creative from "../../assets/undraw_team-page_q5am.svg";

const InformationSection = ({ users, allClass }) => {
  const totalEnrollment = allClass?.reduce(
    (acc, curr) => acc + (curr.totalEnroll || 0),
    0
  );

  return (
    <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-5 py-10 md:py-16 lg:py-20">
      <div className="grid grid-cols-3 gap-5 items-center flex-1">
        <Card className={"col-span-1 gap-3 bg-[#7190F0] text-white"}>
          <p className="text-2xl font-bold text-center">{users?.length}</p>
          <p className="text-center text-lg md:text-xl font-medium">Total User</p>
        </Card>
        <Card className={"col-span-1 gap-3 bg-[#7190F0] text-white"}>
          <p className="text-2xl font-bold text-center">{allClass?.length}</p>
          <p className="text-center text-lg md:text-xl font-medium">Total classes</p>
        </Card>
        <Card className={"col-span-1 gap-3 bg-[#7190F0] text-white"}>
          <p className="text-2xl font-bold text-center">{totalEnrollment}</p>
          <p className="text-center text-lg md:text-xl font-medium">Total enrollment</p>
        </Card>
      </div>
      <div className="flex items-center justify-center  flex-1">
        <img src={creative} alt="" className="h-45 md:h-60 tex-center" />
      </div>
    </div>
  );
};

export default InformationSection;
