import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock, FaUser, FaImage, FaEye } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Loading, Notify } from "notiflix";

const Signup = () => {
  const { createAccount } = useContext(AuthContext);
  const [seePassword, setSeePassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const { user } = await createAccount(data?.email, data?.password);
      //   Update profile
      await updateProfile(user, {
        displayName: data?.name,
        photoURL: data?.photoURL,
      });
      reset();
      //   After create account show a toast
      Notify.success("Account Create successfully...");
    } catch (error) {
      console.log(error);
      Notify.failure("Account create failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-80 md:w-92">
        <div className="flex justify-center mb-4">
          <div className="bg-gray-100 p-3 rounded-full">
            <FaUser className="text-xl text-gray-600" />
          </div>
        </div>

        <h2 className="text-center text-lg font-semibold mb-1">
          Create an Account
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Register to join our learning platform for free
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 mb-1">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Full Name"
              className="bg-transparent outline-none w-full text-sm"
              {...register("name", { required: "Name is required" })}
            />
          </div>
          {errors.name && (
            <p className="text-xs text-red-500 mb-2 ml-1">
              {errors.name.message}
            </p>
          )}

          {/* Email */}
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 mb-1">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent outline-none w-full text-sm"
              {...register("email", { required: "Email is required" })}
            />
          </div>
          {errors.email && (
            <p className="text-xs text-red-500 mb-2 ml-1">
              {errors.email.message}
            </p>
          )}

          {/* Password */}
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 mb-1">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type={seePassword ? "text" : "password"}
              placeholder="Password"
              className="bg-transparent outline-none w-full text-sm"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "At least 6 characters" },
              })}
            />
            <FaEye
              onClick={() => setSeePassword(!seePassword)}
              className="text-gray-400 cursor-pointer"
            />
          </div>
          {errors.password && (
            <p className="text-xs text-red-500 mb-2 ml-1">
              {errors.password.message}
            </p>
          )}

          {/* Photo URL */}
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 mb-1">
            <FaImage className="text-gray-400 mr-2" />
            <input
              type="url"
              placeholder="Photo URL"
              className="bg-transparent outline-none w-full text-sm"
              {...register("photoURL")}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white rounded-lg py-2 my-4 text-sm font-medium"
          >
            {loading ? "Creating..." : "Register"}
          </button>
        </form>

        <p className="text-xs text-center text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
