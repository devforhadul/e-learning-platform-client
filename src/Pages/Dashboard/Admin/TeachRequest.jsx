import axios from "axios";
import { Confirm, Notify } from "notiflix";
import React, { useEffect, useState } from "react";
import TeacherReqTable from "../../../Components/Dashboard/TableRow/TeacherReqTable";
import LoadingSpinner from "../../../Components/Shared/LoadingSpinner";

const TeachRequest = () => {
  const [teachData, setTeachData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTeachData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/teach-req`);
      setTeachData(res?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeachData();
  }, []);

  const updateStatus = async (reqId, status, email) => {
    Confirm.show(
      "Teach Status Confirmation",
      "Are you sure?",
      "Yes",
      "NO",
      async () => {
        try {
          const res = await axios.patch(
            `${import.meta.env.VITE_API_URL}/teach-req`,
            { reqId, status, email }
          );
          Notify.success("Status Update successfully");
          fetchTeachData();
        } catch (error) {
          console.log(error);
        }
      },
      () => {}
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">
        Teacher Requests ({teachData.length})
      </h2>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <TeacherReqTable teachData={teachData} updateStatus={updateStatus} />
      )}
      
    </div>
  );
};

export default TeachRequest;
