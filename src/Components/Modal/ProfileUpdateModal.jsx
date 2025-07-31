import { DialogTitle } from "@mui/material";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "@/Providers/AuthProvider";
import { imageUpload } from "@/Api/uitls";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const ProfileUpdateModal = ({ open, onOpenChange, setOpenModal }) => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    setValue,
    
  } = useForm({
    defaultValues: {
      displayName: user?.displayName || "",
      phoneNumber: user?.phoneNumber || "",
      photoURL: user?.photoURL || "",
    },
  });

  const onProfileSubmit = async (data) => {
    
    //   Update profile
    await updateProfile(user, {
      displayName: data?.displayName,
      phoneNumber: data?.phoneNumber,
      photoURL: data?.photoURL,
    });
    setOpenModal(false);
    toast.success("Profile Updated...");
  };

  const handleFileChange = async (e) => {
    const img = e.target.files[0];
    const imgURL = await imageUpload(img);
    setValue("photoURL", imgURL);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <form onSubmit={handleSubmit(onProfileSubmit)}>
          <DialogHeader>
            <DialogTitle>Profile Update</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 my-3">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" {...register("displayName")} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Mobile Number</Label>
              <Input
                id="username-1"
                name="mobileNumber"
                {...register("phoneNumber", { valueAsNumber: true })}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="picture">Picture</Label>
              <Input id="picture" type="file" onChange={handleFileChange} />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileUpdateModal;
