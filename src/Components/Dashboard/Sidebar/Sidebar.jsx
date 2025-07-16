import React, { useContext, useState } from "react";
import MenuItem from "./Menu/MenuItem";
import { Link } from "react-router";
import useRole from "../../../Hooks/useRole";
import { AuthContext } from "../../../Providers/AuthProvider";
import AdminMenu from "./Menu/AdminMenu";
import TeacherMenu from "./Menu/TeacherMenu";
import CustomerMenu from "./Menu/CustomerMenu";
import { LogOut, UserRoundPen } from "lucide-react";
import { MoonLoader } from "react-spinners";
import { Button } from "@/Components/ui/button";
import { Confirm } from "notiflix";
import { AiOutlineBars } from "react-icons/ai";

const Sidebar = () => {
  const [role, roleLoading] = useRole();
  const { logOut } = useContext(AuthContext);
  const [isActive, setIsActive] = useState(false);

  const handleLogout = () => {
    Confirm.show("Logout Confirmation", "Are you sure?", "Yes", "No", () => {
      logOut();
    }),
      () => {};
  };

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  if (roleLoading) return <MoonLoader size={25} />;

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between itec md:hidden">
        <div>
          <div className="md:flex px-4 py-2 text-2xl font-bold rounded-lg justify-center items-center  mx-auto">
            <Link to="/">Learnisty</Link>
          </div>
        </div>
        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars color="#000" className="h-5 w-5" />
        </button>
      </div>

      {/* ============== */}

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 text-2xl font-bold rounded-lg justify-center items-center  ">
              <Link to="/">Learnisty</Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {/*  Menu Items */}
              {role === "admin" && <AdminMenu />}

              {role === "teacher" && <TeacherMenu />}

              {role === "customer" && <CustomerMenu />}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <MenuItem
            label={"Profile"}
            address={"/dashboard/my-profile"}
            icon={UserRoundPen}
          />

          <Button className={"w-full "} onClick={handleLogout}>
            <LogOut /> Logout
          </Button>
        </div>
      </div>
      {/* 88888888 */}

      {/* <div className="flex justify-between flex-col">
        <div className="text-center">
          <Link to={"/"}>
            <h2 className="text-2xl font-semibold">Learnisty</h2>
          </Link>
          <p className="uppercase">{role}</p>
        </div>

        <div className="">
          {role === "admin" && <AdminMenu />}

          {role === "teacher" && <TeacherMenu />}

          {role === "customer" && <CustomerMenu />}
        </div>

        <div>
          <MenuItem
            label={"Profile"}
            address={"/dashboard/my-profile"}
            icon={UserRoundPen}
          />

          <Button className={"w-full "} onClick={handleLogout}>
            <LogOut /> Logout
          </Button>
        </div>
      </div> */}
    </>
  );
};

export default Sidebar;
