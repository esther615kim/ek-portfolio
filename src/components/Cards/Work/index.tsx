import ProjectCard from "./ProjectCard";
import { projects } from "../../../static/data/data";
import Navbar from "./Navbar";
import { useState } from 'react';
import { Category } from "../../../../types";

export default function Work() {
  const [filteredCategory, setFilteredCategory] = useState(projects);
  const [chosenItem, setChosenItem] = useState("All")

  const handleSetCategory = (category:Category|"All")=>{

    if(category === "All"){
      setFilteredCategory(projects); //?
      setChosenItem(prev=> category);
      return;
    }
    console.log("category:",category);
    const updatedProjectData = projects.filter((item) => item.category.includes(category));
    setFilteredCategory(updatedProjectData);
    setChosenItem(prev=>category);
  }

  return (
    <div className="p-10 lg:px-12 xs:pb-20 col-span-12">
      <nav className="p-4 text-red-400">
        <Navbar handleSetCategory={handleSetCategory}/>
      </nav>

      <div className="relative grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4 my-4">
        {projects.map((project)=>{
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
