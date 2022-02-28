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
    <div className="text-stone-200 shadow-md bg-zinc-800 rounded-lg">
      {/* details */}
      {displayDetails && (
        <div className="absolute grid md:grid-cols-2 top-0 left-0 z-1 h-auto w-full rounded-lg bg-zinc-800">
          <img src={image_url} alt={name} />
          <div className="relative pt-5 pb-10 md:pb-0 md:pt-10">
            <h3 className="mb-4 font-semibold md:text-lg">{name}</h3>
            <h4 className="mb-4">{description}</h4>
            <div>
              {technologies.map((item) => (
                <span
                  className="mx-1 text-xs bg-red-400 text-zinc-800 p-1 px-2 rounded-md"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="md:absolute bottom-10 w-full grid grid-cols-2 px-2">
              <a
                className="flex items-center justify-center my-3 py-1 px-4 mx-5 space-x-2 bg-zinc-700 rounded-sm"
                href={github_url}
              >
                <AiFillGithub />
                <span>Github</span>
              </a>

              <a
                className="flex items-center justify-center my-3 py-1 px-4 mx-5 space-x-2 bg-zinc-700 rounded-sm"
                href={github_url}
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
      <div>
        <img
          className="object-cover h-50 w-100 cursor-pointer rounded-sm"
          src={image_url}
          alt={name}
          onClick={handleClickShowDetails}
        />
        <p className="p-2"> {name}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
