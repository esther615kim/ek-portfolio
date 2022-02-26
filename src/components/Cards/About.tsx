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

export default function Main() {
  return (
    <div className="p-10 lg:px-12 col-span-12">
      {/* INTRODUCTION */}
      <div className="lg:pt-10">
        <h3 className="text-left text-xl font-semiboldp">About</h3>
        <h5 className="block text-white mt-5 text-lg text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga impedit
          minima ex beatae inventore exercitationem iure, nostrum est voluptatum
          repellat enim consequatur vel magni consequuntur quam corrupti
          temporibus! Voluptas, deleniti?
        </h5>
      </div>
      {/* <li>React</li>
                  <li>React Native</li>
                  <li>TypeScript</li>
                  <li>Scss</li>
                  <li>MUI</li>
                  <li>Styled Components</li>
                  <li>tailwindcss</li>
                  <li>Redux Toolkit</li>
                  <li>React Query</li> */}

      {/* TECH */}
      <div>
        <div className="lg:pt-5">
          <h3 className="my-5 text-left text-xl font-medium">Technologies</h3>
          <div>
            <div className="my-5 grid lg:grid-cols-3 gap-5">
              {/* FRONT END */}
              <div className="bg-zinc-800 rounded-md text-zinc-200">
                <h4 className="mt-2 font-medium">Front End</h4>
                <ul className="my-2 grid grid-cols-2">
                  <li className="grid justify-center content-center grid-span-1">
                    <SiJavascript className="ml-3 w-10 h-10 m-2 text-yellow-400" />
                    <p className="text-red">JavaScript</p>
                  </li>

                  <li className="grid justify-center content-center grid-span-1">
                    <SiReact className=" w-10 h-10 m-2 text-cyan-300" />
                    <p className="text-red">React</p>
                  </li>

                  <li className="grid justify-center content-center grid-span-1">
                    <SiReact className=" w-10 h-10 m-2 text-cyan-300" />
                    <p className="text-red">React N</p>
                  </li>

                  <li className="grid justify-center content-center grid-span-1">
                    <SiTypescript className="ml-4 w-10 h-10 m-2 text-blue-700" />
                    <p className="text-red">TypeScript</p>
                  </li>

                  <li className="grid justify-center content-center grid-span-1">
                    <SiRedux className="ml-3 w-10 h-10 m-2 text-violet-500" />
                    <p className="text-red">Redux</p>
                  </li>

                  <li className="grid justify-center content-center grid-span-1">
                    <SiMaterialui className="ml-3 w-10 h-10 m-2 text-blue-500" />
                    <p className="text-red">JavaScript</p>
                  </li>

                  <li className="grid flex-wrap justify-center content-center grid-span-1">
                    < SiStyledcomponents className="ml-5 w-10 h-10 m-2 text-pink-400" />
                    <p className="break-all text-xs width-10 text-red">styled</p>
                    <p className="text-red text-xs">coomponents</p>
                  </li>

                  <li className="grid justify-center content-center grid-span-1">
                    < SiTailwindcss className="ml-3 w-10 h-10 m-2 text-sky-400" />
                    <p className="text-red">tailwindcss</p>
                  </li>



                </ul>
              </div>
              {/* BACK END */}
              <div className="bg-stone-200 rounded-md">
                <h4 className="mt-2 font-medium">Back End</h4>
                <ul className="my-2 grid-cols-2">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>GraphQL</li>
                  <li>Mongodb</li>
                  <li>Firebase v.9</li>
                  <li>PostgreSQL</li>
                  <li>mySQL</li>
                  <li>Jest</li>
                </ul>
              </div>

              {/* OTHERS */}
              <div className="bg-stone-200 rounded-md">
                <h4 className="mt-2 font-medium">Others</h4>
                <ul className="my-2 grid-cols-2">
                  <li>Git & Github</li>
                  <li>Figma</li>
                  <li>Python</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
