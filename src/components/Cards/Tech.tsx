import React from "react";
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

const Tech = () => {
  return (
    <>
      {/* TECH */}
      <div>
        <div className="lg:py-10">
          <h3 className="my-5 text-left text-xl font-medium">Technologies</h3>
          <div>
            <div className="my-5 grid lg:grid-cols-3 gap-5">
              {/* FRONT END */}
              <div className="pb-5 bg-zinc-800 rounded-md text-zinc-200">
                <h4 className="my-5 font-medium">Front End</h4>
                <ul className="my-2 grid grid-cols-2">
                  <li className="grid justify-center content-center grid-span-1">
                    <SiJavascript className="ml-4 w-10 h-10 m-2 text-yellow-400" />
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
                    <SiStyledcomponents className="ml-5 w-10 h-10 m-2 text-pink-400" />
                    <p className="break-all text-xs width-10 text-red">
                      styled
                    </p>
                    <p className="text-red text-xs">coomponents</p>
                  </li>

                  <li className="grid justify-center content-center grid-span-1">
                    <SiTailwindcss className="ml-3 w-10 h-10 m-2 text-sky-400" />
                    <p className="text-red">tailwindcss</p>
                  </li>
                </ul>
              </div>

              {/* Backend */}
              <div className="pb-5 bg-zinc-800 rounded-md text-zinc-200">
                <h4 className="my-5 font-medium">Back End</h4>
                <ul className="my-2 grid grid-cols-2">
                  <li className="grid justify-center content-center grid-span-1">
                    <SiNodedotjs className="ml-2 w-10 h-10 m-2 text-lime-600" />
                    <p className="text-red">Node.js</p>
                  </li>

                  <li className="grid justify-center content-center grid-span-1">
                    <SiExpress className=" w-10 h-10 m-2 text-stone-200" />
                    <p className="text-red">Express</p>
                  </li>

                  <li className="grid justify-center content-center grid-span-1">
                    <SiGraphql className="ml-2 w-10 h-10 m-2 text-pink-600" />
                    <p className="text-red">GraphQL</p>
                  </li>

                  <li className="grid justify-center content-center grid-span-1">
                    <SiMongodb className="ml-4 w-10 h-10 m-2 text-green-600" />
                    <p className="text-red">Mongodb</p>
                  </li>

                  <li className="grid justify-center content-center grid-span-1">
                    <SiFirebase className="w-10 h-10 m-2 ml-1 text-amber-400" />
                    <p className="text-red">Firebase</p>
                  </li>

                  <li className="grid justify-center content-center grid-span-1">
                    <SiPostgresql className="ml-5 w-10 h-10 m-2 text-sky-700" />
                    <p className="text-red">PostgreSQL</p>
                  </li>

                  <li className="grid flex-wrap justify-center content-center grid-span-1">
                    <SiMysql className="w-10 h-10 m-2 ml-1 text-orange-400" />
                    <p className="width-10 text-red">
                      mySQL
                    </p>
                  </li>
                  <li className="grid justify-center content-center grid-span-1">
                    <SiJest className="pt-1 w-10 h-10 m-2 ml-0 text-pink-800" />
                    <p className="text-red">Jest</p>
                  </li>
                </ul>
              </div>

                {/* Others */}
              <div className="pb-5 bg-zinc-800 rounded-md text-zinc-200">
                <h4 className="my-5 font-medium">Others</h4>
                <ul className="my-2 grid grid-cols-2">
                  <li className="grid justify-center content-center grid-span-1">
                    <SiGithub className="w-10 h-10 m-2 text-stone-100" />
                    <p className="text-red text-xs">Git/Github</p>
                  </li>

                  <li className="grid justify-center content-center grid-span-1">
                    <SiPython className=" w-10 h-10 m-2 text-sky-700" />
                    <p className="text-red">Python</p>
                  </li>
                  
                  <li className="grid justify-center content-center grid-span-1">
                    <SiFigma className="pt-1 w-10 h-10 m-2 text-red-500" />
                    <p className="text-red">Figma</p>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tech;
