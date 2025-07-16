import { AuthContext } from "@/Providers/AuthProvider";
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

  // console.log(sigleTeachReq);

  return (
    <div>
      <p>
        Welcome <span className="text-xl font-semibold">{user?.displayName}</span>, <br />{" "}
      </p>
      <p className="ml-25"> Lernisty E-learning platform</p>
    </div>
  );
};

export default DashBoard;
