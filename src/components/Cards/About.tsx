import { DiSass } from "react-icons/di";
import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiRedux,
  SiNodedotjs,
  SiGraphql,
  SiMongodb,
  SiJest,
  SiFirebase,
  SiPostgresql,
  SiMysql,
  SiGithub,
  SiPython,
  SiFigma,
  SiStyledcomponents,
  SiBootstrap,
  SiMaterialui,
} from "react-icons/si";
import Tech from "./Tech";

export default function Main() {
  return (
    <div className="p-10 lg:px-12 col-span-12">
      <div className="lg:pt-10">
        <h3 className="text-left text-xl font-semiboldp">About</h3>
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

{/* <li>Node.js</li>
<li>Express</li>
<li>GraphQL</li>
<li>Mongodb</li>
<li>Firebase v.9</li>
<li>PostgreSQL</li>
<li>mySQL</li>
<li>Jest</li> */}