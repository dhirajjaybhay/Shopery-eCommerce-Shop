import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useEffect, useState } from "react";
import Index from "./layouts/Index";
import Home from "./layouts/Home";
import AboutUS from "./pages/AboutUS";
import Shop from "./pages/Shop";
import ContactUS from "./pages/ContactUS";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import toast, { Toaster } from "react-hot-toast";
import SingleProduct from "./pages/SingleProduct";
import { auth } from "./firebaseAuth/Auth";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [cart, setCart] = useState([]);
  const [userName, setUserName] = useState('');

  const addToCart = (product) => {
    const isProductExite = cart.find((findItem) => findItem.id === product.id);
    if (isProductExite) {
      const updateCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updateCart);
      toast.success("Product added successfully")
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      toast.success("Product added successfully")
    }
  };

const decValue =(id) =>{
  const decItemVal = cart.map((item) => item.id === id && item.quantity >1  ? { ...item, quantity : item.quantity - 1}: item )
  setCart(decItemVal);
}
const incValue =(id) =>{
  const decItemVal = cart.map((item) => item.id === id ? { ...item, quantity : item.quantity + 1}: item )
  setCart(decItemVal);
}

const removeItem = (id) =>{
  const updateRemoveItem = cart.filter((item) =>(item.id !== id))
  setCart(updateRemoveItem);
}

const totalPrice = () =>{
 const allPrice =  cart.reduce((total, cartPrice)=>{
    return total + cartPrice.price * cartPrice.quantity
  },0)
  return  allPrice;
}

useEffect(()=>{
  auth.onAuthStateChanged((user)=>{
    if(user ){
      setUserName(user.displayName);
    }else{
      setUserName('')
    }
  })
})

  return (
    <>
      <Routes>
        <Route path="/" element={<Index cart={cart} userName= { userName}/>}>
          <Route index element={<Home addToCart={addToCart}/>} />
          <Route path="/shop" element={<Shop addToCart={addToCart}  />} />
          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/contactus" element={<ContactUS />} />
          <Route path="/cart" element={<Cart cart={cart} incValue={incValue} decValue={decValue} removeItem={removeItem} totalPrice={totalPrice}/>} />
          <Route path="/product/:id" element={<SingleProduct addToCart={addToCart}/>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
