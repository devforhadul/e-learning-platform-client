import React, { useContext, useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { AuthContext } from "../../../Providers/AuthProvider";
import useRole from "../../../Hooks/useRole";
import ProfileUpdateModal from "../../../Components/Modal/ProfileUpdateModal";
import FullSpinner from "@/Components/Shared/FullSpinner";
import { Badge } from "@/Components/ui/badge";
import { BadgeCheckIcon, UserPen } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [role] = useRole();
  const [openModal, setOpenModal] = useState(false);

  if (!user || !role) return <FullSpinner />;
  return (
    <div>
      <div className="flex justify-between items-center">
        <h5 className="text-xl font-semibold text-gray-800">Profile Information</h5>
        <Button className={'rounded-full bg-Primary'} onClick={() => setOpenModal(true)}
        >
          <UserPen size={16} />Edit
        </Button>
        <ProfileUpdateModal
          open={openModal}
          close={() => setOpenModal(false)}
          onOpenChange={setOpenModal}
          setOpenModal={setOpenModal}
        />
      </div>

      {/* Profile Info Section */}
      <div className="bg-white py-3">
        {/* Profile Image */}
        <div className="flex items-center gap-2">
          <div>
            <img
              src={user?.photoURL}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white object-cover bg-white"
            />

          </div>
          <div>
            <div className="flex items-center gap-1">
              <h2 className="text-xl font-semibold">{user?.displayName}</h2>
              {user?.emailVerified && (
                <Badge variant="secondary" className="text-back dark:bg-blue-600">
                  <BadgeCheckIcon className="text-blue-600" />
                  Verified
                </Badge>
              )}
            </div>
            {/* Role under image */}
            <span className=" mt-2 px-2 py-0.5 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 capitalize">
              {role == "customer" ? "student" : role}
            </span>
          </div>
        </div>
      </div>

      <hr className="my-1" />

      <div>
        <h5 className="text-xl font-medium text-gray-800">Personal Details</h5>
        {/* Info Section */}
        <div className="space-y-3 mt-3">
          <div className="grid w-full max-w-sm items-center gap-3">

            <Label htmlFor="email">Name</Label>
            <Input disabled type="email" id="email" placeholder={user?.displayName} />

            {/* <div>
              <Label htmlFor="email">Name</Label>
              <Input disabled type="email" id="email" placeholder={user?.displayName} />
            </div> */}
          </div>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="email">Email</Label>
            <Input disabled type="email" id="email" placeholder={user?.email} />
          </div>
          {/* <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="email">Phone Number</Label>
            <Input disabled type="email" id="email" placeholder={user?.email} />
          </div> */}
        </div>
      </div>

    </div>
  );
};

export default Profile;
