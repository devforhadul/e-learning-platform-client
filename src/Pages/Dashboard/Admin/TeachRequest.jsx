import axios from "axios";
import { Confirm, Notify } from "notiflix";
import React from "react";
import TeacherReqTable from "../../../Components/Dashboard/TableRow/TeacherReqTable";
import LoadingSpinner from "../../../Components/Shared/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";

const TeachRequest = () => {
  // const [teachData, setTeachData] = useState([]);
  //const [loading, setLoading] = useState(true);

  const { data: teachData, isPending } = useQuery({
    queryKey: ["teachRequests"],
    queryFn: async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/teach-req`);
      return data;
    },
  });

  if (isPending) return <LoadingSpinner />;

  const updateStatus = async (reqId, status, email) => {
    Confirm.show(
      "Teach Status Confirmation",
      "Are you sure?",
      "Yes",
      "NO",
      async () => {
        try {
          const _res = await axios.patch(
            `${import.meta.env.VITE_API_URL}/teach-req`,
            { reqId, status, email }
          );
          Notify.success("Status Update successfully");
          // fetchTeachData();
        } catch (error) {
          console.log(error);
        }
      },
      () => {}
    );
  };

  return (
    <div className="">
      <h2 className="text-2xl font-semibold mb-4">
        Teacher Requests ({teachData?.length})
      </h2>

      {isPending ? (
        <LoadingSpinner />
      ) : (
        <TeacherReqTable teachData={teachData} updateStatus={updateStatus} />
      )}
    </div>
  );
};

export default TeachRequest;
