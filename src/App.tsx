import React from "react";
import "./styles/global.css";
import { CardContextProvider} from './context/CardContext';
import Menu from "./components/Menu";
import Side from "./components/Side/Side";
import Theme from "./components/Theme";

function App() {

  return (
    <CardContextProvider>
      
      <div className="grid w-screen h-screen grid-cols-12 text-center md:p-10 lg:py-20 xl:px-40">

        <div className="relative col-span-12 py-5 lg:rounded-l-lg bg-gradient-to-r from-rose-300 to-violet-400 lg:col-span-3">
          <div className="invisible w-16 h-16 transform bg-white shadow-md lg:visible lg:absolute top-20 lg:-right-8 lg:rounded-lg lg:rotate-45"></div>
          <Side />
        </div>

        <div className="col-span-12 p-5 rounded-r-lg bg-zinc-700 lg:col-span-9">
        <Menu />
        </div>

        <div className="col-span-12 pt-2 text-xs text-stone-200">
          <p className="m-2">darkmode</p>
          <Theme />
        </div>

      </div>
    </CardContextProvider>
  );
}

export default App;
