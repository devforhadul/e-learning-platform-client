import React from "react";
import Container from "../Container";
import { NavLink } from "react-router";

const navMenu = (
  <>
    <NavLink to={"/"}>Home</NavLink>
    <NavLink to={"/classes"}>All Classes</NavLink>
    <NavLink to={"/techon"}>Tech on</NavLink>

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
            <div>
                <ul className="flex gap-5">
                    {navMenu}
                </ul>
            </div>
            <div>
                <button className="px-4 py-1 bg-sky-500 rounded-sm text-white cursor-pointer">Sign In</button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
