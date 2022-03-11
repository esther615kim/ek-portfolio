import Tech from "./Tech";

export default function About() {
  return (
    <div className="col-span-12 p-10 md:px-10 lg:px-20">
      <div className="lg:pt-10">
        <h3 className="text-xl text-left text-red-400 font-semiboldp">About</h3>
        <h5 className="block mt-5 text-left dark:text-white md:text-lg font-rubik">
        I am a JavaScript Developer interested in the React environment and Front-end development technologies.
        </h5>
        <Tech/>
      </div>
    </div>
  );
}
