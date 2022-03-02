import { AiOutlineMail, AiOutlineMobile } from "react-icons/ai";
import emailjs from "emailjs-com";
import {toast} from 'react-toastify';


export default function Contact() {

  const handleSubmitForm = (e:React.ChangeEvent<HTMLInputElement>):void =>{

    e.preventDefault();
    toast.info("🎉The message has been sent successfully!",
    {position:"bottom-left"})
    // emailjs.sendForm(process.env.REACT_APP_EMAIL,
    //   process.env.REACT_APP_TEMPLATE,
    //   e.target,
    //   process.env.REACT_APP_USER_ID)
    // .then(res=>{
    //   console.log(res)
    // }).catch(err=> console.error(err));

  }
  return (
    <div className="h-full md:mt-20 md:p-10  xl:px-20 ">
      <div className="grid h-full md:grid-cols-2 rounded-lg bg-zinc-800">
        
         <div className="p-5 2xl:px-10 grid content-end md:py-20 text-stone-200">
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
        <div className="px-5 py-10 m-5 2xl:m-10 rounded-lg md:pt-10 bg-stone-200">
          <h1 className="my-10 text-xl font-bold">Let's talk</h1>
          <form onSubmit={ handleSubmitForm} action="submit">
            <input
              className="w-full px-5 py-1 mb-5 rounded-md"
              type="text"
              name="name"
              placeholder="FIRST NAME"
            />
            <input
              className="w-full px-5 py-1 mb-5 rounded-md"
              type="text"
              name="email"
              placeholder="EMAIL"
            />
            <textarea style={{height:160}}
              className="w-full px-5 py-1 mb-5 rounded-md"
              name="message"
              placeholder="MESSAGE"
            ></textarea>
            <button type="submit" className="w-full px-5 py-1 mb-5 rounded-md shadow-md text-stone-100 hover:scale-95 font-poppins bg-zinc-700">
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
