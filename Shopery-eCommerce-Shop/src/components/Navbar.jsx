import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import { useState } from "react";
import { auth } from "../firebaseAuth/Auth";
import toast from "react-hot-toast";

function Navbar(props) {
  const [isOpen, setisOpen] = useState(false);

  const toggleChange = () => {
    setisOpen(!isOpen);
  };

  const handleLogout = () => {
   
    auth.signOut().then(() => {
      toast.success("Logout Successfully")
    }).catch((error) => {
      toast.error(error)
    })
  }

  return (
    <>
      <div className="fixed top-3 w-full bg-gray-50 p-4 z-50">
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
                  <li className="font-semibold pt-4" onClick={toggleChange}>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="font-semibold pt-4" onClick={toggleChange}>
                    <NavLink to="/shop">Shop</NavLink>
                  </li>
                  <li className="font-semibold pt-4" onClick={toggleChange}>
                    <NavLink to="/aboutus">About Us</NavLink>
                  </li>
                  <li className="font-semibold pt-4" onClick={toggleChange}>
                    <NavLink to="/contactus">Contact Us</NavLink>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}

            <div className="flex gap-1 md:gap-4">
              <div className="relative">
                <div className="absolute right-1 top-[-15px] bg-red-500 rounded-3xl px-2">
                  <h1 className="text-white">
                    {props.cart.length > 0 ? props.cart.length : ""}
                  </h1>
                </div>
                <Link to="/cart">
                  <CiShoppingCart className="text-4xl" />
                </Link>
              </div>
              <div>

              {
              props.userName? (<> <div className="gap-2 flex items-center">

               <span>{props.userName}</span>
                <button className="py-1 px-2 border-2 border-gray-100 rounded-md bg-red-500 text-white"
                onClick={handleLogout}>
                  <NavLink to="/signin">Logout</NavLink>
                </button>
              </div>
                </>):(
                <> 
                <button className="py-1 px-4 border-2 border-gray-100 rounded-md bg-red-500 text-white">
                  <NavLink to="/signin">Login</NavLink>
                </button>
                </>)
              }
              
             
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
