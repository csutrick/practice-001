import React from "react";

import Navbar from "./components/Navbar";
import Page1 from "./components/Page1";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <body className="h-[400px] w-full flex justify-center items-center">
        <Page1 />
      </body>
      <Footer />
    </div>
  );
}

export default App;