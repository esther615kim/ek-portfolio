import React,{useState} from "react";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiFillCodeSandboxCircle,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const Side = () => {


  const changeDarkTheme = ():void => {
    const root = window.document.body;
    if(root.className ==="dark"){
      root.classList.replace("dark","light")
    }else{
      root.classList.replace("light","dark")
    }

  };


  return (
    <div>
      <h3 className="mt-10 text-3xl font-semibold tracking-wider text-white lg:mt-20 lg:pt-40 font-oohhbaby">
        Esther Kim
      </h3>
      <p className="mt-5 mb-20 text-lg font-medium hover:text-cyan-300 font-poppins lg:mb-40 ">
        Front End Developer
      </p>
      
      {/* socials */}
      <div className="flex justify-around px-20 py-4 my-5 space-x-2 bg-gradient-to-r dark:opacity-95 opacity-75 from-zinc-700 to-zinc-800 md:px-10 text-stone-100 md:w-auto md:2-full">
        <AiOutlineLinkedin
         onClick={()=>{window.location.href="www.linkedin.com/in/esther-kim-dev"}}  
        className="w-6 h-6 cursor-pointer hover:text-cyan-300 hover:scale-105" />
        <AiFillGithub 
         onClick={()=>{window.location.href="https://github.com/esther615kim"}} 
        className="w-6 h-6 cursor-pointer hover:text-cyan-300" />
        <AiFillCodeSandboxCircle 
                 onClick={()=>{window.location.href="https://codepen.io/EKim15"}} 
        className="w-6 h-6 cursor-pointer hover:text-cyan-300" />
      </div>
      <div className="py-3 my-5">
        <div className="flex items-center justify-center space-x-1 space-y-3">
          <GoLocation className="w-5 h-5" />
          <span className="block font-rubik">Rugby, UK</span>
        </div>
        <p className="my-2 font-rubik">vilchen15@gmail.com</p>
      </div>
      <div className="pb-10 space-y-2 lg:pb-20">
        <button
        onClick={()=>{window.location.href=""}} 
        className="w-10/12 py-1 my-1 mb-2 rounded-md shadow-md hover:scale-95 font-poppins bg-gradient-to-r from-stone-100 to-gray-200 hover:text-red-500">
          CV
        </button>
        <button 
        onClick={changeDarkTheme}
        className="w-10/12 py-1 my-1 rounded-md shadow-md dark:text-stone-100 hover:scale-95 font-poppins dark:bg-zinc-700 hover:text-red-500 bg-indigo-200"> 
          Change Theme
        </button>
      </div>
    </div>
  );
};



export default Side;
