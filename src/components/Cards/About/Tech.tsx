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
          <h3 className="my-5 text-xl font-medium text-left text-red-400">Technologies</h3>
          <div>
            <div className="grid gap-5 my-5 lg:grid-cols-3">
              {/* FRONT END */}
              <div className="py-10 rounded-md hover:bg-indigo-400 hover:opacity-80 hover:font-semibold hover:text-zinc-800 bg-zinc-800 text-zinc-200">
                <h4 className="my-5 font-semibold">Front End</h4>
                <ul className="grid grid-cols-2 my-2">
                  <li className="grid content-center justify-center grid-span-1">
                    <SiJavascript className="w-10 h-10 m-2 ml-4 text-yellow-400" />
                    <p className="text-red">JavaScript</p>
                  </li>

                  <li className="grid content-center justify-center grid-span-1">
                    <SiReact className="w-10 h-10 m-2 text-cyan-300" />
                    <p className="text-red">React</p>
                  </li>

                  <li className="grid content-center justify-center grid-span-1">
                    <SiReact className="w-10 h-10 m-2 text-cyan-300" />
                    <p className="text-red">React N</p>
                  </li>

                  <li className="grid content-center justify-center grid-span-1">
                    <SiTypescript className="w-10 h-10 m-2 ml-4 text-blue-700" />
                    <p className="text-red">TypeScript</p>
                  </li>

                  <li className="grid content-center justify-center grid-span-1">
                    <SiRedux className="w-10 h-10 m-2 ml-3 text-violet-500" />
                    <p className="text-red">Redux</p>
                  </li>

                  <li className="grid content-center justify-center grid-span-1">
                    <SiMaterialui className="w-10 h-10 m-2 ml-3 text-blue-500" />
                    <p className="text-red">JavaScript</p>
                  </li>

                  <li className="grid flex-wrap content-center justify-center grid-span-1">
                    <SiStyledcomponents className="w-10 h-10 m-2 ml-5 text-pink-400" />
                    <p className="text-xs break-all width-10 text-red">
                      styled
                    </p>
                    <p className="text-xs text-red">coomponents</p>
                  </li>

                  <li className="grid content-center justify-center grid-span-1">
                    <SiTailwindcss className="w-10 h-10 m-2 ml-3 text-sky-400" />
                    <p className="text-red">tailwindcss</p>
                  </li>
                </ul>
              </div>

              {/* Backend */}
              <div className="py-10 rounded-md hover:bg-indigo-400 hover:opacity-80 hover:font-semibold hover:text-zinc-800 bg-zinc-800 text-zinc-200">
                <h4 className="my-5 font-semibold">Back End</h4>
                <ul className="grid grid-cols-2 my-2">
                  <li className="grid content-center justify-center grid-span-1">
                    <SiNodedotjs className="w-10 h-10 m-2 ml-2 text-lime-500" />
                    <p className="text-red">Node.js</p>
                  </li>

                  <li className="grid content-center justify-center grid-span-1">
                    <SiExpress className="w-10 h-10 m-2 text-stone-200" />
                    <p className="text-red">Express</p>
                  </li>

                  <li className="grid content-center justify-center grid-span-1">
                    <SiGraphql className="w-10 h-10 m-2 ml-2 text-pink-600" />
                    <p className="text-red">GraphQL</p>
                  </li>

                  <li className="grid content-center justify-center grid-span-1">
                    <SiMongodb className="w-10 h-10 m-2 ml-4 text-green-600" />
                    <p className="text-red">Mongodb</p>
                  </li>

                  <li className="grid content-center justify-center grid-span-1">
                    <SiFirebase className="w-10 h-10 m-2 ml-1 text-amber-400" />
                    <p className="text-red">Firebase</p>
                  </li>

                  <li className="grid content-center justify-center grid-span-1">
                    <SiPostgresql className="w-10 h-10 m-2 ml-5 text-sky-700" />
                    <p className="text-red">PostgreSQL</p>
                  </li>

                  <li className="grid flex-wrap content-center justify-center grid-span-1">
                    <SiMysql className="w-10 h-10 m-2 ml-1 text-orange-500" />
                    <p className="width-10 text-red">mySQL</p>
                  </li>
                  <li className="grid content-center justify-center grid-span-1">
                    <SiJest className="w-10 h-10 pt-1 m-2 ml-0 text-pink-800" />
                    <p className="text-red">Jest</p>
                  </li>
                </ul>
              </div>

              {/* Others */}
              <div className="py-10 rounded-md hover:bg-indigo-400 hover:opacity-80 hover:font-semibold hover:text-zinc-800 bg-zinc-800 text-zinc-200">
                <h4 className="my-5 font-semibold">Others</h4>
                <ul className="grid grid-cols-2 my-2">
                  <li className="grid content-center justify-center grid-span-1">
                    <SiGithub className="w-10 h-10 m-2 text-stone-100" />
                    <p className="text-xs text-red">Git/Github</p>
                  </li>

                  <li className="grid content-center justify-center grid-span-1">
                    <SiPython className="w-10 h-10 m-2 text-sky-700" />
                    <p className="text-red">Python</p>
                  </li>

                  <li className="grid content-center justify-center grid-span-1">
                    <SiFigma className="w-10 h-10 pt-1 m-2 text-red-500" />
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
