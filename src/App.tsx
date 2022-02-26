import React,{useContext,useEffect} from "react";
import "./styles/global.css";
import { CardContextProvider } from "./context/CardContext";
import Menu from "./components/Menu";
import Side from "./components/Side/Side";
import About from "./components/Cards/About";
import Contact from "./components/Cards/Contact";
import Work from "./components/Cards/Work";
import CardContext from "./context/CardContext";


function App() {

  const {card}:{card:string} = useContext(CardContext);

  useEffect(()=>{
    console.log("카드보여주시오",card)
  },[card]);

  return (
    <CardContextProvider>
    <div className="w-screen grid grid-cols-12 text-center lg:px-12">
      <div className="p-5 my-2 col-span-12 rounded-md bg-black text-white">
        <Menu />
      </div>
      
      <div className="py-5 h-full lg:rounded-l-lg col-span-12 bg-gradient-to-r from-violet-400 to-indigo-400 lg:col-span-3 relative">
      {/* <div className="py-5 h-full lg:rounded-l-lg col-span-12 bg-cyan-300 lg:col-span-3 relative"> */}
        {/* <div className="col-span-12 bg-red-500 lg:col-span-3 relative"> */}
        <div className="invisible lg:visible lg:absolute top-20 lg:-right-8 h-16 w-16 bg-white shadow-md lg:rounded-lg transform lg:rotate-45"></div>
        <Side />
      </div>
      {/* CARD - display a different card depending on cardContext*/} 
      <div className="col-span-12 rounded-r-lg bg-stone-600 lg:col-span-9">
       {(card===undefined ||'about') && <About />}
       {(card==='work') && <Work />}
       {(card==='contact') && <Contact />}
      </div>
    </div>
    </CardContextProvider>
  );
}

export default App;
