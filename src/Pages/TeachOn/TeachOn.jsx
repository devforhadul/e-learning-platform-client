import React from "react";
import TeachonForm from "../../Components/Form/TeachonForm";
import useRole from "../../Hooks/useRole";

const TeachOn = () => {

    const [role] = useRole();
    
  return (
    <div className="">
      <TeachonForm role={role}/>
    </div>
  );
};

export default TeachOn;
