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

  const handleClickShowDetails = ()=>{
      console.log("show more!")
      setDisplayDetails(prev => !prev);
  }
  return (
    <div className="text-stone-200 bg-zinc-800">
      <div>
        <img
          className="object-cover h-50 w-100 cursor-pointer rounded-sm"
          src={image_url}
          alt={name}
          onClick={handleClickShowDetails}
        />
        <p className="p-2"> {name}</p>
      </div>

      {/* details */}
      {displayDetails && (
        <div className="grid md:grid-cols-2">
          <div>
            <img src={image_url} alt={name} />
            <a href={github_url}>
              <AiFillGithub /> <span>Github</span>
            </a>
            <a href={github_url}>
              <AiOutlineFundProjectionScreen /> <span>Project</span>
            </a>
          </div>
          <div>
            <h3>{name}</h3>
            <h4>{description}</h4>
            <div>
              {technologies.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          {/* remove button */}
          <button onClick={handleClickShowDetails}>
            <AiOutlineCloseCircle />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
