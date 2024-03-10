import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import { FaArrowRight } from "react-icons/fa6";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function Home() {
  const [products, setProducts] = useState([]);
  const [random, setRandom] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let res = await fetch("https://dummyjson.com/products");
      let data = await res.json();

      let data1 = data.products;
      console.log(data1);

      const uniqueCategories = [];
      data1.forEach((product) => {
        const index = uniqueCategories.findIndex(
          (item) => item.category === product.category
        );
        if (index === -1) {
          uniqueCategories.push(product);
        }
      });

      // console.log(uniqueCategories);

      setProducts(uniqueCategories);

      const randomProduct = [];
      data1.forEach((item) => {
        if (item.id % 2 == 0) {
          randomProduct.push(item);
        }
      });
      setRandom(randomProduct);
      // console.log(data);'
    }
    fetchData();
  }, []);
  // console.log(random)

  return (
    <div className="pt-20">
      <div className="flex flex-col lg:flex-row pt-4">
        <div className="w-full">
          <div className="hero1 pb-20 rounded-md pl-4 lg:pl-16">
         
          </div>
        </div>
      </div>

      <section>
        <div className="pt-4">
          <div className="flex flex-col xl:flex-row flex-wrap p-4 w-full shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 w-full xl:w-2/4">
              <div className="flex  gap-2 w-full  xl:w-2/4 p-1">
                <div className="text-5xl pt-1 text-green-600">
                  <LiaShippingFastSolid />
                </div>
                <div>
                  <p className="font-semibold text-lg">Free Shipping </p>
                  <p className="text-sm pt-2">Free shipping on all order </p>
                </div>
              </div>
              <div className="flex gap-2 w-full xl:w-2/4 p-1">
                <div className="text-5xl pt-1 text-green-600">
                  <RiCustomerService2Line />
                </div>
                <div>
                  <p className="font-semibold text-lg">Customer Support 24/7</p>
                  <p className="text-sm pt-2">Instant access to support</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-4 md:gap-0  xl:w-2/4 pt-4 xl:pt-0">
              <div className="flex gap-2 w-full xl:w-2/4 p-1">
                <div className="text-5xl pt-1 text-green-600">
                  <MdPayment />
                </div>
                <div>
                  <p className="font-semibold text-lg">100% Secure Payment</p>
                  <p className="text-sm pt-2">We ensure your money is save</p>
                </div>
              </div>
              <div className="flex gap-2 w-full xl:w-2/4 p-1">
                <div className="text-5xl pt-1 text-green-600">
                  <GiTakeMyMoney />
                </div>
                <div>
                  <p className="font-semibold text-lg">Money-Back Guarantee </p>
                  <p className="text-sm pt-2">30 Days Money-Back Guarantee </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="pt-20">
          <div>
            <h1 className="text-4xl font-semibold">Popular Categories</h1>
          </div>
          <div className="flex justify-center flex-wrap gap-5 md:gap-10 pt-10">
            {products.map((item, index) => (
              <>
                <div
                  key={index}
                  className=" border-2 border-gray-100 rounded-md   mt-4 transition duration-300 ease-in-out  hover:border-green-500 cursor-pointer"
                >
                  <div className="flex justify-center">
                    <img src={item.images[0]} className="h-56 w-80" alt="" />
                  </div>
                  <div className="flex justify-center py-4">
                    <p className="font-semibold"> {item.category} </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* <section>
        <div className="pt-10">
          <div>
            <h1 className="text-3xl font-semibold">Popular Categories</h1>
          </div>
          <div className="flex justify-center lg:justify-normal flex-wrap pt-4">
            {HomeProduct.map((item) => (
              <>
                <div key={item.id} className=" border-2 border-gray-100 mx-1 rounded-md mt-4 transition duration-300 ease-in-out  hover:border-green-500 cursor-pointer">
                  <div className="">
                    <img src={item.img} className="" alt="" />
                  </div>
                  <div className="flex justify-center py-2">
                    <p className="font-semibold"> {item.name} </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section> */}

      <section>
        <div className="pt-20">
          <div>
            <h1 className="text-3xl font-semibold">Popular Products</h1>
          </div>
          <div className="flex justify-center md:justify-normal flex-wrap pt-10">
            {random.map((item, index) => (
              <>
                <div
                  key={index}
                  className="p-2 border-2 border-gray-100 sm:w-2/4 md:w-1/4 transition duration-300 ease-in-out  hover:border-green-500 cursor-pointer"
                >
                  <div className="">
                    <img src={item.images[0]} className="h-80 w-full" alt="" />
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p>${item.price}</p>
                      {/* <p>{ item.rating}</p> */}
                    </div>
                    <div className="mr-4 p-2 bg-slate-100 rounded-3xl transition duration-300 ease-in-out hover:bg-green-600 hover:text-white">
                      <HiOutlineShoppingBag className="text-2xl" />
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
