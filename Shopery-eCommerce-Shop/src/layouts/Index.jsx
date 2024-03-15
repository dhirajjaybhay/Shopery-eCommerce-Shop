import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function Index(props) {
  return (
    <>
      <div>
        <Navbar cart={props.cart}/>
        <main className="max-w-screen-xl mx-auto px-4 xl:px-8">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Index;
