import React from "react";
import { NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import { useState } from "react";

function Navbar() {
  const [isOpen, setisOpen] = useState(false);

  const toggleChange = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed top-3 w-full bg-gray-50 p-4 ">
        <nav>
          <div className="flex justify-between relative">
            <div>
              <NavLink to="/">
                <h1 className="text-3xl font-bold">Ecobazar</h1>
              </NavLink>
            </div>
            <div className="hidden md:flex items-center">
              <ul className="flex gap-6 text-center pt-2">
                <li className="font-semibold">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="font-semibold">
                  <NavLink to="/shop">Shop</NavLink>
                </li>
                <li className="font-semibold">
                  <NavLink to="/aboutus">About Us</NavLink>
                </li>
                <li className="font-semibold">
                  <NavLink to="/contactus">Contact Us</NavLink>
                </li>
              </ul>
            </div>

            {isOpen ? (
              <div className="flex flex-col md:hidden z-20 absolute top-[50px] w-full h-96 bg-red-400 items-center">
                <ul className=" text-center pt-10">
                  <li className="font-semibold pt-4">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="font-semibold pt-4">
                    <NavLink to="/shop">Shop</NavLink>
                  </li>
                  <li className="font-semibold pt-4">
                    <NavLink to="/aboutus">About Us</NavLink>
                  </li>
                  <li className="font-semibold pt-4">
                    <NavLink to="/contactus">Contact Us</NavLink>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}

            <div className="flex gap-4">
              <div>
                <CiShoppingCart className="text-4xl" />
              </div>
              <div>
                <button className="py-1 px-4 border-2 border-gray-100 rounded-md bg-red-500 text-white">
                  <NavLink>Login</NavLink>
                </button>
              </div>
              <div className="md:hidden">
                <div>
                  {isOpen ? (
                    <div>
                      <IoClose onClick={toggleChange} className="text-3xl" />
                    </div>
                  ) : (
                    <div>
                      <FaBars
                        onClick={toggleChange}
                        className="text-3xl text-gray-700"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;