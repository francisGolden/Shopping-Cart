import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Shop from "./Shop";
import {useState} from "react";
import { CartProvider } from "./context/Context";

function App() { 
  return (
    <div id="main-container">
      <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
