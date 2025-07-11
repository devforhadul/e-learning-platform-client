import React, { useContext } from "react";
import AddClassForm from "../../../Components/Form/AddClassForm";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";
import axios from "axios";
import { Notify } from "notiflix";
import { useNavigate } from "react-router";

const TeachAddCalsses = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, ...rest } = data;
    const formateData = {
      ...rest,
      instructor: {
        name,
        email,
      },
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/all-class`,
        formateData
      );

      if (res?.data.insertedId) {
        reset();
        Notify.success("Your class under Review...");
        navigate('/dashboard/teach-my-class')
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <AddClassForm
          handleSubmit={handleSubmit}
          register={register}
          errors={errors}
          onSubmit={onSubmit}
          user={user}
        />
      </div>
    </div>
  );
};

export default TeachAddCalsses;
