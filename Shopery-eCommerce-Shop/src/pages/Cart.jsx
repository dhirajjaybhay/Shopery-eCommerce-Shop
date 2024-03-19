import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

function Cart({ cart, decValue, incValue, removeItem, totalPrice }) {
  return (
    <>
      <div className="container mx-auto mt-28 ">
      <div className="shoppingCart">
    <div className="flex gap-2 py-2 items-center">
      <Link to='/'><p>Home</p></Link>
      <p> <MdKeyboardDoubleArrowRight /> </p>
      <Link to='/cart'><p>cart</p></Link>

    </div>
    <img src="../assets/img/shoppingCart1.jpg" className="h-[250px] w-full opacity-90 rounded-sm" alt="" />
    </div>
        <div className="flex flex-col md:flex-row shadow-lg border border-gray-200 rounded-md my-10">
          <div className="w-full md:w-3/4 bg-white p-4 md:px-10 md:py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{cart.length} Items</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                Price
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                Total
              </h3>
            </div>

            {cart.map((item) => (
              <>
                <div
                  key={item.id}
                  className="flex items-center -mx-8 px-6 py-5"
                >
                  <div className="flex w-2/5">
                    <div className="w-20">
                      <img className="h-24" src={item.thumbnail} alt="" />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-sm">{item.title}</span>
                      <span className="text-red-500 text-xs">
                        {item.category}
                      </span>
                      <span 
                      onClick={()=>removeItem(item.id)}
                    
                        className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
                      >
                        Remove
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center gap-2 p-0 items-center w-1/5">
                    <div>
                      <FiMinus className="cursor-pointer" onClick={()=>decValue(item.id)}/>
                    </div>

                    <div>
                      <button className="">{item.quantity}</button>
                    </div>
                    <div>
                      <IoIosAdd className="cursor-pointer"  onClick={()=>incValue(item.id)}/>
                    </div>
                  </div>
                  <span className="text-center w-1/5 font-semibold text-sm">
                   Rs. {item.price}
                  </span>
                  <span className="text-center w-1/5 font-semibold text-sm">
                   Rs. {item.price * item.quantity}
                  </span>
                </div>
              </>
            ))}
          </div>

          <div
            id="summary"
            className="w-full md:w-1/4 px-4 py-4 md:px-8 md:py-10"
          >
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">{cart.length} Items</span>
              {/* <span className="font-semibold text-sm">Rs. {totalPrice ()} </span> */}
            </div>
            <div>
             
            </div>
           
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>Rs. {totalPrice ()}</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
