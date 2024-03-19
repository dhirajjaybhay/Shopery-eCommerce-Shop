import React, { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

function Shop({ addToCart }) {
  const [product, setProducts] = useState([]);
  const [showAllProduct, setAllProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchProduct, setSearchProduct] = useState("");

  useEffect(() => {
    async function fetchData() {
      let res = await fetch("https://dummyjson.com/products");
      let data = await res.json();
      let data1 = data.products;
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
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchAllData() {
      let res = await fetch(`https://dummyjson.com/products`);
      let allData = await res.json();
      let productData = allData.products;
      setAllProduct(productData);
    }

    fetchAllData();
  }, []);

  const handleProductChange = (category) => {
    setSelectedCategory(category);
  };

  const searchItems = (e) => {
    const searchdItems = e.target.value;
    setSearchProduct(searchdItems);
  };

  const searchItemsBtn = () => {
    const searchProductByUser = showAllProduct.filter((item) =>
      item.title.toLowerCase().includes(searchProduct.toLowerCase())
    );
    console.log(searchProductByUser);
    setAllProduct(searchProductByUser);
    setSearchProduct("");
  };

  return (
    <div className="pt-28">
      <div className="shoppingCart">
        <div className="flex gap-2 py-2 items-center">
          <Link to="/">
            <p>Home</p>
          </Link>
          <p>
            {" "}
            <MdKeyboardDoubleArrowRight />{" "}
          </p>
          <Link to="/shop">
            <p>Shop</p>
          </Link>
        </div>

        <img
          src="../assets/img/shoppingCart1.jpg"
          className="h-[250px] w-full opacity-90 rounded-sm"
          alt=""
        />
      </div>
      <div className="flex flex-col pt-10">
        <div className="flex justify-center">
          <div className=" flex items-center gap-2 py-5">
            <select
              onChange={(e) => handleProductChange(e.target.value)}
              className="border border-gray-500 p-2 rounded-md cursor-pointer"
            >
              <option value="" className="cursor-pointer">
                All Product
              </option>
              {product.map((item, index) => (
                <>
                  <option
                    key={index}
                    value={item.category}
                    className="cursor-pointer"
                  >
                    {item.category}
                  </option>
                </>
              ))}
            </select>
            {/* <span 
                id="allProduct"
                onClick={showAllProducts}
              className="ml-2 cursor-pointer" htmlFor="allProduct">
                All Items
              </span>
            {product.map((item, index) => (
              <div className="pt-0" key={index}>
                <span
                  id={`product-${index}`}
                  onClick={() => handleProductChange(item.category)}
                  className="ml-2 cursor-pointer"
                  htmlFor={`product-${index}`}
                >
                  {item.category}
                </span>
              </div>
            ))} */}
          </div>
        </div>
        <div className="flex w-full justify-center items-end mb-10">
          <div className="relative mr-4 lg:w-1/2 xl:w-1/2 w-2/4  text-left">
            <input
              value={searchProduct}
              onChange={searchItems}
              placeholder="Search Items"
              className=" w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            onClick={searchItemsBtn}
            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Search
          </button>
        </div>

        <div className="flex justify-evenly gap-5 flex-wrap  pb-20">
          {selectedCategory === ""
            ? showAllProduct.map((item, index) => (
                <>
                  <div
                    key={index}
                    className=" border-2 border-gray-100 rounded-md w-full md:w-2/5  lg:w-1/4   mt-4 transition duration-300 ease-in-out  hover:border-green-500 cursor-pointer"
                  >
                    <div className="flex justify-center">
                      <Link to={`/product/${item.id}`}>
                        <img
                          src={item.thumbnail}
                          className="h-56 w-80 rounded-md"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex px-2 pt-4">
                        <p className="font-semibold"> {item.title} </p>
                      </div>
                      <div className="flex justify-between px-2 py-1 items-center">
                        <div>Price : {item.price} ₹</div>
                        <div>
                          <CiShoppingCart
                            className="mr-2 text-4xl cursor-pointer bg-slate-100 rounded-3xl transition duration-300 ease-in-out hover:bg-green-600 hover:text-white"
                            onClick={() => addToCart(item)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))
            : showAllProduct
                .filter((product) => product.category === selectedCategory)
                .map((item) => (
                  <>
                    <div
                      key={item.id}
                      className=" border-2 border-gray-100 rounded-md w-full md:w-2/5  lg:w-1/4   mt-4 transition duration-300 ease-in-out  hover:border-green-500"
                    >
                      <div className="flex justify-center">
                        <Link to={`/product/${item.id}`}>
                          <img
                            src={item.thumbnail}
                            className="h-56 w-80 rounded-md"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex px-2 pt-4">
                          <p className="font-semibold"> {item.title} </p>
                        </div>
                        <div className="flex justify-between px-2 py-1 items-center">
                          <div>Price : {item.price} ₹</div>
                          <div>
                            <CiShoppingCart
                              className="mr-2 text-4xl cursor-pointer bg-slate-100 rounded-3xl transition duration-300 ease-in-out hover:bg-green-600 hover:text-white"
                              onClick={() => addToCart(item)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
