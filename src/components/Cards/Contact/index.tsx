import { AiOutlineMail, AiOutlineMobile } from "react-icons/ai";
export default function Contact() {
  return (
    <div className="h-full pt-5 md:mt-20 md:p-10 xl:mx-20 ">
      <div className="grid h-full grid-cols-2 pt-10 rounded-lg md:p-20 sm:pt-0 bg-zinc-800">
        <div className="grid content-end py-20 sm:p-10 text-stone-200">
          <h1 className="ml-1 text-xl font-bold text-left">Contact me.</h1>

          <div className="flex items-center font-semibold text-md ">
            <AiOutlineMobile className="mr-2" />
            07349932320
          </div>
          <div className="flex items-center font-semibold text-md">
            <AiOutlineMail className="mr-2" />
            vilchen15@gmail.com
          </div>

        </div>
        {/* FORM */}
        <div className="px-5 py-10 m-5 rounded-lg md:pt-10 bg-stone-200">
          <h1 className="my-10 text-xl font-bold">Let's talk</h1>
          <form action="submit">
            <input
              className="w-full px-5 py-1 mb-5 rounded-md"
              type="text"
              placeholder="FIRST NAME"
            />
            <input
              className="w-full px-5 py-1 mb-5 rounded-md"
              type="text"
              placeholder="EMAIL"
            />
            <textarea
              className="w-full px-5 py-1 mb-5 rounded-md"
              placeholder="MESSAGE"
            ></textarea>
            <button className="w-full px-5 py-1 mb-5 rounded-md shadow-md text-stone-100 hover:scale-95 font-poppins bg-zinc-700">
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
