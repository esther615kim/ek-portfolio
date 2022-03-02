import React,{useContext,useEffect} from "react";
import "./styles/global.css";
import { CardContextProvider } from "./context/CardContext";
import Menu from "./components/Menu";
import Side from "./components/Side/Side";
import CardContext from "./context/CardContext";
import Theme from './components/Theme';
import Work from './components/Cards/Work/index';
import Contact from './components/Cards/Contact/index';
import About from './components/Cards/About/index';


function App() {

  const {card}:{card:string} = useContext(CardContext);

  useEffect(()=>{
    console.log("카드보여주시오",card)
  },[card]);

  return (
    <CardContextProvider>
    <div className="grid w-screen grid-cols-12 text-center lg:px-12">
      <div className="col-span-12 p-5 mt-2 text-white bg-zinc-800">
        <Menu />
      </div>
      {/* <div className="relative h-full col-span-12 py-5 bg-rose-300 lg:rounded-l-lg lg:col-span-3"> */}
              <div className="relative h-full col-span-12 py-5 lg:rounded-l-lg bg-gradient-to-r from-rose-300 to-violet-400 lg:col-span-3">
      {/* <div className="relative h-full col-span-12 py-5 lg:rounded-l-lg bg-gradient-to-r from-violet-400 to-indigo-400 lg:col-span-3"> */}

        <div className="invisible w-16 h-16 transform bg-white shadow-md lg:visible lg:absolute top-20 lg:-right-8 lg:rounded-lg lg:rotate-45"></div>
        <Side />
      </div>
      <div className="col-span-12 p-5 rounded-r-lg bg-zinc-700 lg:col-span-9">
        <Work/>
        {/* <About/> */}
        {/* <Contact /> */}
       {/* {(card===undefined ||'about') && <About />}
       {(card==='work') && <Work />}
       {(card==='contact') && <Contact />} */}
      </div>
      <div className="col-span-12 p-2 text-xs text-stone-200">
        <p className="m-2">darkmode</p>
        <Theme/>
      </div>
    </div>
    </CardContextProvider>
  );
}

export default App;
