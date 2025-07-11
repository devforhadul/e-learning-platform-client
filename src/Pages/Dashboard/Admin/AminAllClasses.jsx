import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminAllClassTable from "../../../Components/Dashboard/TableRow/AdminAllClassTable";
import { Confirm } from "notiflix";
import toast from "react-hot-toast";

const AdminAllClasses = () => {
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

  const updateStatus = async (id, status) => {
    Confirm.show(
      "Class update Confirmation",
      `Are you sure update to ${status}`,
      "Yes",
      "No",
      async () => {
        try {
          const res = await axios.patch(
            `${import.meta.env.VITE_API_URL}/class-status`,
            { id, status }
          );

          toast.success(status," suceesfully");
          
          console.log(res.data);
        } catch (error) {
          console.log(error);
        }
      },
      () => {}
    );

  };

  return (
    <div>
      <p className="text-2xl font-semibold mb-4">
        All Class Request({allClass.length})
      </p>

      <AdminAllClassTable allClass={allClass} updateStatus={updateStatus} />
    </div>
  );
};

export default AdminAllClasses;
