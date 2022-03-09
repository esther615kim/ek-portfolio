import React, { FunctionComponent, useState } from "react";
import { IProject } from "../../../../types";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiOutlineFundProjectionScreen,
  AiOutlineCloseCircle,
} from "react-icons/ai";

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({
  project: {
    name,
    image_url,
    category,
    description,
    github_url,
    technologies,
    deployed_url,
  },
}) => {
  const [displayDetails, setDisplayDetails] = useState<boolean>(false);

  const handleClickShowDetails = () => {
    console.log("show more!");
    setDisplayDetails((prev) => !prev);
  };
  return (
    <div className="rounded-lg shadow-md text-stone-200 bg-zinc-800">
      {/* DETAILS */}
      {displayDetails && (
        <div className="absolute top-0 left-0 z-20 grid w-full h-auto rounded-lg md:grid-cols-2 bg-zinc-800">
          <img src={image_url} alt={name} />
          <div className="relative pt-5 pb-10 md:pb-0 md:pt-10">
            <h3 className="mb-4 font-semibold md:text-lg">{name}</h3>
            <h4 className="mb-4">{description}</h4>
            <div>
              {technologies.map((item) => (
                <span
                  className="p-1 px-2 mx-1 text-xs bg-red-400 rounded-md text-zinc-800"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="grid w-full grid-cols-2 px-2 md:absolute bottom-10">
              <a
                className="flex items-center justify-center px-4 py-1 mx-5 my-3 space-x-2 rounded-sm bg-zinc-700"
                href={github_url}
              >
                <AiFillGithub />
                <span>Github</span>
              </a>

              <a
                className="flex items-center justify-center px-4 py-1 mx-5 my-3 space-x-2 rounded-sm bg-zinc-700"
                href={deployed_url}
              >
                <AiOutlineFundProjectionScreen />
                <span>Project</span>
              </a>
            </div>
          </div>
          {/* remove button */}
          <button
            className="absolute top-2 right-2 "
            onClick={handleClickShowDetails}
          >
            <AiOutlineCloseCircle className="text-lg" />
          </button>
        </div>
      )}
      {/* CARD */}
      <div className="relative">
        <img
          className="z-10 object-cover rounded-lg cursor-pointer hover:bg-zinc-800 hover:z-0 hover:opacity-50 h-50 w-100"
          src={image_url}
          alt={name}
          onClick={handleClickShowDetails}
        />
        <p style={{transform:"translate(-50%,-50%)"}}className="absolute z-0 w-full text-lg font-semibold text-white inset-2/4 "> {name}</p>
      </div>

    </div>
  );
};

export default ProjectCard;
