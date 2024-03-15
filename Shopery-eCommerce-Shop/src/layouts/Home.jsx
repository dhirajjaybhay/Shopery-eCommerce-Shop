import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import { FaArrowRight } from "react-icons/fa6";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function Home({addToCart}) {
  const [products, setProducts] = useState([]);
  const [random, setRandom] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let res = await fetch("https://dummyjson.com/products");
      let data = await res.json();

      let data1 = data.products;
      // console.log(data1);

      const uniqueCategories = [];
      data1.forEach((product) => {
        const index = uniqueCategories.findIndex(
          (item) => item.category === product.category
        );
        if (index === -1) {
          uniqueCategories.push(product);
        }
      });


      setProducts(uniqueCategories);

      const randomProduct = [];
      data1.forEach((item) => {
        if (item.id % 2 == 0) {
          randomProduct.push(item);
        }
      });
      setRandom(randomProduct);
    }
    fetchData();
  }, []);

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
                    <img src={item.images[0]} className="h-56 w-80 rounded-t-md " alt="" />
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
                    </div>
                    <div className="mr-4 p-2 bg-slate-100 rounded-3xl transition duration-300 ease-in-out hover:bg-green-600 hover:text-white">
                      <HiOutlineShoppingBag className="text-2xl" onClick={()=>addToCart(item)}/>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" aria-label="What our customers are saying" className=" py-16 mt-10 sm:py-32">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-2xl md:text-center">
      <h2 className=" text-3xl tracking-tight text-slate-900 sm:text-4xl">What Our Customers Are Saying</h2>
    </div>
    <ul role="list"
      className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
      <li>
        <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
          <li>
            <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                <path
                  d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                </path>
              </svg>
              <blockquote className="relative">
                <p class="text-lg tracking-tight text-slate-900">I love the fitness apparel and gear I purchased from
                  this site. The quality is exceptional and the prices are unbeatable.</p>
              </blockquote>
              <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                <div>
                  <div className="font-display text-base text-slate-900">Sheryl Berge</div>
                </div>
                <div className="overflow-hidden rounded-full bg-slate-50">
                  <img alt="" className="h-14 w-14 object-cover"  style={{ color:"transparent"}} src="https://randomuser.me/api/portraits/men/15.jpg" />
                </div>
              </figcaption>
            </figure>
          </li>
        </ul>
      </li>
      <li>
        <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
          <li>
            <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                <path
                  d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                </path>
              </svg>
              <blockquote className="relative">
                <p class="text-lg tracking-tight text-slate-900">As a professional athlete, I rely on high-performance
                  gear for my training. This site offers a great selection of top-notch products.</p>
              </blockquote>
              <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                <div>
                  <div className="font-display text-base text-slate-900">Leland Kiehn</div>
                </div>
                <div className="overflow-hidden rounded-full bg-slate-50">
                  <img alt="" className="h-14 w-14 object-cover" style={{ color:"transparent"}}  src="https://randomuser.me/api/portraits/women/15.jpg" />
                </div>
              </figcaption>
            </figure>
          </li>
        </ul>
      </li>
      <li>
        <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
          <li>
            <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                <path
                  d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                </path>
              </svg>
              <blockquote className="relative">
                <p class="text-lg tracking-tight text-slate-900">The fitness apparel I bought here fits perfectly and
                  feels amazing. I highly recommend this store to anyone looking for quality gear.</p>
              </blockquote>
              <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                <div>
                  <div className="font-display text-base text-slate-900">Peter Renolds</div>
                </div>
                <div className="overflow-hidden rounded-full bg-slate-50">
                  <img alt="" className="h-14 w-14 object-cover" style={{ color:"transparent"}}  src="https://randomuser.me/api/portraits/men/10.jpg" />
                </div>
              </figcaption>
            </figure>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</section>
    </div>
  );
}

export default Home;
