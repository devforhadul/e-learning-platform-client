import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import TeacherClassCard from "../../../Components/Shared/Card/TeacherClassCard";
import { Confirm } from "notiflix";
import toast from "react-hot-toast";

const TeachMyClasses = () => {
  const { user } = useContext(AuthContext);
  const [myClass, setMyClass] = useState([]);

  useEffect(() => {
    const fetchMyClass = async () => {
      try {
        const res = await axios(
          `${import.meta.env.VITE_API_URL}/teach-my-class/${user?.email}`
        );
        setMyClass(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMyClass();
  }, [user]);

  const onDelete = async (id) => {
    Confirm.show(
      "Class Delete Confirmation",
      "Are you sure?",
      "Yes",
      "No",
      async () => {
        try {
          const res = await axios.delete(
            `${import.meta.env.VITE_API_URL}/class/delete/${id}`
          );
          if (res.data) {
            toast.success("Class Delete successfully");
          }
        } catch (error) {
          console.log(error);
        }
      },
      () => {}
    );
  };

  return (
    <div>
      Techer my classes
      <div className="grid gap-4">
        {myClass.map((cls) => (
          <TeacherClassCard
            key={cls._id}
            cls={cls}
            onUpdate={(data) => console.log("Update", data)}
            onDelete={onDelete}
            onView={(data) => console.log("Details", data)}
          />
        ))}
      </div>
    </div>
  );
};

export default TeachMyClasses;
