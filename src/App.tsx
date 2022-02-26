import React from "react";
import "./styles/global.css";
import Menu from "./components/Menu";
import Side from "./components/Side/Side";
import About from "./components/Cards/About";

function App() {
  return (
    <div className="w-screen grid grid-cols-12 text-center lg:px-12 gird">
      <div className="m-5 lg:m-10 col-span-12 rounded-md bg-stone-black text-white lg:col-span-12">
        <Menu />
      </div>

      <div className="py-5 h-full lg:rounded-l-lg col-span-12 bg-cyan-300 lg:col-span-3 relative">
        {/* <div className="col-span-12 bg-red-500 lg:col-span-3 relative"> */}
        <div className="invisible lg:visible lg:absolute top-20 lg:-right-8 h-16 w-16 bg-white shadow-md lg:rounded-lg transform lg:rotate-45"></div>
        <Side />
      </div>
      {/* CARD - display a different card depending on cardContext*/} 
      <div className="col-span-12 rounded-r-lg bg-stone-600 lg:col-span-9">
        <About />
      </div>
    </div>
  );
}

export default App;
