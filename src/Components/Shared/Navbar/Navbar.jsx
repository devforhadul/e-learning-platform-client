import React, { useContext } from "react";
import Container from "../Container";
import { Link, NavLink } from "react-router";
import { CiMenuFries } from "react-icons/ci";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Confirm } from "notiflix";

const navMenu = (
  <>
    <NavLink to={"/"}>Home</NavLink>
    <NavLink to={"/all-classes"}>All Classes</NavLink>
    <NavLink to={"/teachon"}>Teach on E-Lern</NavLink>
  </>
);

const Navbar = () => {
  const { user, loading, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    Confirm.show(
      "Logout Confirm",
      "Are you sure?",
      "Yes",
      "No",
      () => {
      logOut();
      
      },
      () => {

      }
    );
  };

  return (
    <div className="">
      <div className="py-4 border-b-[1px] border-gray-100">
        <Container>
          <div className="flex justify-between items-center">
            <div>
              <Link to={"/"}>
                <h2 className="text-2xl font-semibold">Learnisty</h2>
              </Link>
            </div>
            <div className="hidden md:block">
              <ul className="flex gap-5">{navMenu}</ul>
            </div>
            <div>
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="px-4 py-1 bg-sky-500 rounded-sm text-white cursor-pointer"
                >
                  Sign Out
                </button>
              ) : (
                <Link to={"/login"}>
                  <button className="px-4 py-1 bg-sky-500 rounded-sm text-white cursor-pointer">
                    Sign In
                  </button>
                </Link>
              )}
              <CiMenuFries className="hidden" size={24} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
