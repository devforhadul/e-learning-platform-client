import React, { useContext, useEffect, useRef, useState } from "react";
import Container from "../Container";
import { Link, NavLink, useNavigate } from "react-router";
import { CiMenuFries } from "react-icons/ci";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Confirm, Notify } from "notiflix";
import toast from "react-hot-toast";

const navMenu = (
  <>
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive ? "text-blue-600 font-semibold " : "text-gray-600"
      }
    >
      Home
    </NavLink>

    <NavLink
      to="/all-classes"
      className={({ isActive }) =>
        isActive ? "text-blue-600 font-semibold " : "text-gray-600"
      }
    >
      All Classes
    </NavLink>

    <NavLink
      to="/teachon"
      className={({ isActive }) =>
        isActive ? "text-blue-600 font-semibold " : "text-gray-600"
      }
    >
      Teach on E-Lern
    </NavLink>
  </>
);

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [openImg, setOpenImg] = useState(false);
  const dropdownRef = useRef();

  console.log(user)

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenImg(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = () => {
    Confirm.show(
      "Logout Confirm",
      "Are you sure?",
      "Yes",
      "No",
      () => {
        logOut();
        toast.success("Log out successfully!!");
        navigate("/login");
      },
      () => {}
    );
  };

  return (
    <div className="">
      <div className="py-4 border-b-[1px] border-gray-100">
        <Container>
          <div className="flex justify-between items-center">
            {/* Logo and Website Name */}
            <div>
              <Link to={"/"}>
                <h2 className="text-2xl font-semibold">Learnisty</h2>
              </Link>
            </div>
            {/* middle Navmenu in web */}
            <div className="hidden md:block">
              <ul className="flex gap-5">{navMenu}</ul>
            </div>
            {/* Right side menus */}
            <div className="flex items-center gap-2">
              {!user && (
                <Link to={"/login"}>
                  <button className="px-4 py-1 bg-sky-500 rounded-sm text-white cursor-pointer">
                    Sign In
                  </button>
                </Link>
              )}

              <CiMenuFries className="md:hidden" size={24} />

              {/* After login items shows */}
              {user && (
                <div
                  className="relative inline-block text-left"
                  ref={dropdownRef}
                >
                  <img
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co/ZYW3VTp/brown-brim.png"
                    }
                    alt="profile"
                    className="w-10 h-10 rounded-full cursor-pointer border border-dashed border-gray-500"
                    onClick={() => setOpenImg(!openImg)}
                  />

                  {openImg && (
                    <div className="border border-gray-500 border-dashed absolute right-0 mt-1 w-48 bg-white  rounded-lg shadow-lg z-50">
                      <div className="px-4 py-2 text-gray-800 text-sm font-medium border-b">
                        {user?.displayName || "Unknown User"}
                        {/* {user?.email || "Unknown User"} */}
                      </div>
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        //onClick={() => setOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
