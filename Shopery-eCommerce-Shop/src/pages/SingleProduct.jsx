import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function SingleProduct({ addToCart }) {
  const { id } = useParams();
  const [product, setProducts] = useState([]);
  // console.log(id)

  useEffect(() => {
    async function fetchProduct() {
      let product = await fetch(`https://dummyjson.com/products/${id}`);
      let res = await product.json().catch((error) => toast.error(error.message) )
      setProducts(res);
    }
    fetchProduct();
  }, [id]);

  return (
    <div className="pt-28">
     <div className="shoppingCart">
    <div className="flex gap-2 py-2 items-center">
      <Link to='/'><p>Home</p></Link>
      <p> <MdKeyboardDoubleArrowRight /> </p>
      <Link to='/shop'><p>Shop</p></Link>
      <p> <MdKeyboardDoubleArrowRight /> </p>
      <Link to=''><p>Product Details</p></Link>

    </div>

    <img src="../assets/img/shoppingCart1.jpg" className="h-[250px] w-full opacity-90 rounded-sm" alt="" />
    </div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 rounded"
              src={product.thumbnail}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest ">
                {product.brand}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 pt-3">
                {product.title}
              </h1>
              <div className="flex mb-4">
                <span className="text-gray-600 pt-3">Rating: {product.rating}</span>
              </div>
              <p className="leading-relaxed pt-3">{product.description}</p>

              <div className="flex  pt-5">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {product.price} ₹
                </span>
                <button
                  onClick={() => addToCart(product)}
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SingleProduct;
