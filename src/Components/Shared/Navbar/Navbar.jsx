import React from "react";
import Container from "../Container";
import { NavLink } from "react-router";
import { CiMenuFries } from "react-icons/ci";

const navMenu = (
  <>
    <NavLink to={"/"}>Home</NavLink>
    <NavLink to={"/all-classes"}>All Classes</NavLink>
    <NavLink to={"/teachon"}>Teach on E-Lern</NavLink>

  </>
);

const Navbar = () => {
  return (
    <div className="">
      <div className="py-4 border-b-[1px] border-gray-100">
        <Container>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-semibold">E-Lerning</h2>
            </div>
            <div className="hidden md:block">
                <ul className="flex gap-5">
                    {navMenu}
                </ul>
            </div>
            <div>
                <button className="px-4 py-1 bg-sky-500 rounded-sm text-white cursor-pointer">Sign In</button>
                <CiMenuFries />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
