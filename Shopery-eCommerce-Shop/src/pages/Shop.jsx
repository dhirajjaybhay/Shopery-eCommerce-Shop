import React, { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";

function Shop( {addToCart}) {
  const [product, setProducts] = useState([]);
  const [showAllProduct, setAllProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

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

  const showAllProducts = () => {
    setSelectedCategory("");
  };

  return (
    <div className="pt-20">
      <div className="flex pt-10">
        <div className="w-1/4 hidden md:block">
          <div>
            <button className="py-2 px-4 bg-green-400 rounded-md text-white">
              Filter
            </button>
          </div>
          <div className="pt-5">
            <div className="">
              <input
                type="radio"
                name="productGroup"
                onChange={showAllProducts}
                id="allProduct"
                checked={selectedCategory === ""}
              />
              <label className="ml-2 cursor-pointer" htmlFor="allProduct">All Items</label>
            </div>
            {product.map((item, index) => (
              <div className="pt-2" key={index}>
                <input
                  onChange={() => handleProductChange(item.category)}
                  type="radio"
                  id={`product-${index}`}
                  name="productGroup"
                  checked={selectedCategory === item.category}
                />
                <label className="ml-2 cursor-pointer" htmlFor={`product-${index}`}>
                  {item.category}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-3/4 flex justify-center gap-5 flex-wrap">
          {selectedCategory === ""
            ? showAllProduct.map((item, index) => (
                <>
                  <div
                    key={index}
                    className=" border-2 border-gray-100 rounded-md w-full md:w-2/5  lg:w-1/4   mt-4 transition duration-300 ease-in-out  hover:border-green-500 cursor-pointer"
                  >
                    <div className="flex justify-center">
                      <img src={item.images[0]} className="h-56 w-80" alt="" />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex px-2 pt-4">
                          <p className="font-semibold"> {item.title} </p>
                        </div>
                        <div className="flex justify-between px-2 py-1 items-center">
                          <div>Price : {item.price}</div>
                          <div>
                          <CiShoppingCart className="text-4xl cursor-pointer" onClick={()=>addToCart(item)}/>
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
                        <img
                          src={item.images[0]}
                          className="h-56 w-80"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex px-2 pt-4">
                          <p className="font-semibold"> {item.title} </p>
                        </div>
                        <div className="flex justify-between px-2 py-1 items-center">
                          <div>Price : {item.price}</div>
                          <div>
                          <CiShoppingCart className="text-4xl cursor-pointer" onClick={()=>addToCart(item)} />
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
