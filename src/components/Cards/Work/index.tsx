import ProjectCard from "./ProjectCard";
import { projects } from "../../../static/data/data";
import Navbar from "./Navbar";
import { useState } from 'react';
import { Category } from "../../../../types";

export default function Work() {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [chosenCategory, setChosenCategory] = useState("All")

  const handleSetCategory = (ctgr:Category|"All")=>{

    if(ctgr === "All"){
      setFilteredProjects(projects);
      setChosenCategory(ctgr);
      return;
    }

    console.log("category:",ctgr);

    const updatedProjectData = projects.filter((item) => item.category.includes(ctgr)); // 
    console.log("filtered",updatedProjectData);
    setFilteredProjects(updatedProjectData);
    setChosenCategory(ctgr);
  }

  return (
    <div className="col-span-12 p-10 lg:px-12 xs:pb-20">
      <nav className="p-4 text-red-400">
        <Navbar handleSetCategory={handleSetCategory}/>
      </nav>

      <div className="relative grid grid-cols-1 gap-4 my-4 lg:grid-cols-3 sm:grid-cols-2">
        {filteredProjects.map((project)=>{
        {/* SINGLE PROJECT */}
        return <div className="m-2 rounded-sm"key={project.name}>
          <ProjectCard project={project}/>
        </div>
        }
        )}
      </div>
    </div>
  );
}
