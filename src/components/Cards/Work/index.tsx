import ProjectCard from "./ProjectCard";
import { projects } from "../../../static/data/data";
import Navbar from "./Navbar";

export default function Work() {
  return (
    <div className="p-10 lg:px-12 col-span-12">
      <nav className="p-4 text-red-400">
        <Navbar/>
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
