import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <body className="flex flex-col ">
        <Hero />
        <About />
        <Products />
        <Reviews />
      </body>
      <Footer />
    </div>
  );
}

export default App;