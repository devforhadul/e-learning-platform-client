import React, { useContext, useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { AuthContext } from "../../../Providers/AuthProvider";
import useRole from "../../../Hooks/useRole";
import ProfileUpdateModal from "../../../Components/Modal/ProfileUpdateModal";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [role] = useRole();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="max-w-3xl mx-auto mt-10 rounded-lg overflow-hidden shadow">
      {/* Cover Section */}
      <div className="relative h-40 bg-gray-300">
        {/* Cover Edit Icon */}
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-gray-100">
          <BsPencilSquare size={16} className="text-gray-500" />
        </button>
      </div>

      {/* Profile Info Section */}
      <div className="bg-white px-6 py-4 relative">
        {/* Profile Image */}
        <div className="absolute -top-20 left-6 flex flex-col items-center">
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white object-cover bg-white"
          />
          {/* Role under image */}
          <span className=" mt-2 px-2 py-0.5 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 capitalize">
            {role == "customer" ? "student" : role}
          </span>
        </div>

        {/* Info Section */}
        <div className="ml-32">
          <h2 className="text-xl font-semibold">{user?.displayName}</h2>
          <p className="text-gray-600 text-sm">
            {user?.phoneNumber || "Nor provide!"}
          </p>
          <p className="text-gray-600 text-sm">{user?.email}</p>
        </div>

        {/* Edit Icon for Profile Info */}
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-gray-100">
          <BsPencilSquare
            onClick={() => setOpenModal(true)}
            size={16}
            className="text-gray-500"
          />
          <ProfileUpdateModal
            open={openModal}
            close={() => setOpenModal(false)}
          />
        </button>
      </div>
    </div>
  );
};

export default Profile;
