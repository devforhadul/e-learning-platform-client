import React, { useContext, useState } from "react";
import { MdEmail } from "react-icons/md";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaFacebookF,
  FaApple,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Providers/AuthProvider";
import { Notify } from "notiflix";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const { signinWithGoogle, signinWithEmail } = useContext(AuthContext);
  const [seePassword, setSeePassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleSigninEmail = async (data) => {
    if (!data.email || !data.password) {
      toast.error("Email and password are required");
      return;
    }

    setLoading(true);
    toast.dismiss(); // সব পুরনো toast clear করে দাও
    try {
      const { user } = await signinWithEmail(data?.email, data?.password);

      // যদি login ব্যর্থ হয়
      if (!user?.email) {
        throw new Error("Login failed");
      }

      // সফল হলে
      reset(); // form reset
      toast.success("Login Successfully");
      navigate("/dashboard");
    } catch (error) {
      // Notify.failure("Something Wrong", error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      const { user } = await signinWithGoogle();
      const userdata = {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      };
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/user`,
        userdata
      );
      console.log(data);
      toast.success("Google login successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-80 md:w-90">
        <div className="flex justify-center mb-4">
          <div className="bg-gray-100 p-3 rounded-full">
            <FaEnvelope className="text-xl text-gray-600" />
          </div>
        </div>

        <h2 className="text-center text-lg font-semibold mb-1">
          Sign in with email
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Make a new doc to bring your words, data, and teams together. For free
        </p>

        <form onSubmit={handleSubmit(handleSigninEmail)}>
          {/* Email input */}
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 mb-4">
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

          {/* Password input */}
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 mb-2">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type={seePassword ? "text" : "password"}
              placeholder="Password"
              className="bg-transparent outline-none w-full text-sm"
              {...register("password", { required: "Password is required!" })}
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

          <div className="text-right text-xs text-gray-500 mb-4 cursor-pointer hover:underline">
            Forgot password?
          </div>

          <button
            type="submit"
            onClick={handleSigninEmail}
            className="w-full bg-black text-white rounded-lg py-2 mb-4 text-sm font-medium"
          >
            {loading ? "Loging..." : "Log In"}
          </button>
        </form>

        <p className="text-xs text-center text-gray-500">
          Already dont't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>

        <div className="text-center text-gray-400 text-xs mb-3">
          Or sign in with
        </div>

        {/* Social buttons */}
        <div className="flex justify-between px-4">
          <button
            onClick={handleGoogle}
            className="bg-gray-100 p-2 rounded-lg cursor-pointer"
          >
            <FcGoogle size={20} />
          </button>
          <button className="bg-gray-100 p-2 rounded-lg text-blue-600">
            <FaFacebookF size={18} />
          </button>
          <button className="bg-gray-100 p-2 rounded-lg text-black">
            <FaApple size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
