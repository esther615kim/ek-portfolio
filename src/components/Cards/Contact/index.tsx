
import {AiOutlineMail} from "react-icons/ai";
export default function Contact() {
  return (
    <div className="h-full p-5 md:p-20 ">
      <div className="grid h-full pt-10 rounded-lg md:p-20 sm:pt-0 bg-zinc-800 justify-items-end">
        {/* FORM */}
      <div className="p-5 rounded-lg md:w-3/5 lg:w-3/5 xl:w-2/5 md:pt-10 bg-stone-200">
        <h1 className="my-10 text-lg font-bold">Let's talk</h1>
        <form action="submit">
          <input className="w-full px-5 py-1 mb-5 rounded-md"type="text" placeholder="FIRST NAME" />
          <input className="w-full px-5 py-1 mb-5 rounded-md" type="text" placeholder="EMAIL" />
          <textarea className="w-full px-5 py-1 mb-5 rounded-md h-1/5" placeholder="MESSAGE"></textarea>
          <button className="w-full px-5 py-1 mb-5 rounded-md shadow-md text-stone-100 hover:scale-95 font-poppins bg-zinc-700"> 
           SEND
          </button>
        </form>
      </div>

      </div>
    
    </div>
  );
}
