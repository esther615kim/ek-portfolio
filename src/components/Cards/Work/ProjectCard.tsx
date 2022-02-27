import React, { FunctionComponent } from "react";
import { IProject } from "../../../../types";

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({
  project: { name, image_url, category, description, github_url, deployed_url },
}) => {
  return (
    <div className="text-stone-200 bg-zinc-800 rounded-sm">
        <img src={image_url} alt={name} />
      {name}
    </div>
  );
};

export default ProjectCard;
