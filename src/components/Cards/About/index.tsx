import Tech from "./Tech";

export default function About() {
  return (
    <div className="p-10 lg:px-12 col-span-12">
      <div className="lg:pt-10">
        <h3 className="text-left text-xl text-red-400 font-semiboldp">About</h3>
        <h5 className="block text-white mt-5 text-lg text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga impedit
          minima ex beatae inventore exercitationem iure, nostrum est voluptatum
          repellat enim consequatur vel magni consequuntur quam corrupti
          temporibus! Voluptas, deleniti?
        </h5>
        <Tech/>
      </div>
    </div>
  );
}
