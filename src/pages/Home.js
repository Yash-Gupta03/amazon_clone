import React from "react";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <ProductDetail />
      <Cart />
    </div>
  );
}

export default Home;
