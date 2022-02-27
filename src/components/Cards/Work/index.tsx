import ProjectCard from "./ProjectCard";

export default function Work() {
  return (
    <div className="p-10 lg:px-12 col-span-12">
      <nav>Navbar</nav>

      <div className="relative grid grid-cols-2 lg:grid-cols-3 gap-2 my-3">
        {/* SINGLE PROJECT */}
        <div className="p-2">
          <ProjectCard />
        </div>
                {/* SINGLE PROJECT */}
                <div className="p-2 ">
          <ProjectCard />
        </div>
                {/* SINGLE PROJECT */}
                <div className="p-2">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}
