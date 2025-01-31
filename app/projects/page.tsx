import { Playwrite_US_Trad } from "next/font/google";
import { projects } from "@/data/skills";
import { ProjectCard } from "@/components/ProjectCard";

const playwrite = Playwrite_US_Trad();

export default function Projects() {

  return (
    <>
      <p className={`text-6xl ${playwrite.className} mt-8 mb-5 text-cyan-950`}>
        Projects{" "}
      </p>
      <p className="py-2 pr-2 -mt-6 mb-6 underline decoration-wavy decoration-cyan-300 text-nowrap truncate decoration-3 text-transparent text-xl text-center select-none pointer-events-none">
        This is for the underline working
      </p>
      <div
        className="projects-container grid gap-6"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(max(240px, 40%), 1fr))",
        }}
      >
        {projects.map((item, index) => (
          <ProjectCard key={index} item={item} />
        ))}
      </div>
    </>
  );
}
