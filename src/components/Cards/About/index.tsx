import Tech from "./Tech";

export default function About() {
  return (
    <div className="col-span-12 p-10 lg:px-12">
      <div className="lg:pt-10">
        <h3 className="text-xl text-left text-red-400 font-semiboldp">About</h3>
        <h5 className="block mt-5 text-lg text-left text-white font-sacramento">
        I am a JavaScript Developer interested in React environment and interactive design tools. I like thinking of little ideas to make something new using new technologies.
        </h5>
        <Tech/>
      </div>
    </div>
  );
}
