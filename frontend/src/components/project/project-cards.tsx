// project-cards.tsx
import type { ProjectType } from "@/data/types";
import projectsData from "@/data/db-projects.json";
import { background_color, text_color } from "@/lib/color-palatte";

const ProjectCards = () => {
  const projects: ProjectType[] = projectsData.projects;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects
        .sort((a, b) => (a.date > b.date ? -1 : 1))
        .map((project: ProjectType) => (
          <div
            key={project.id}
            className={`flex flex-col gap-3 shadow-xl rounded-lg p-5 ${background_color}`}
          >
            <div className="flex items-start justify-between gap-2">
              <p className={`text-xl font-bold ${text_color}`}>{project.title}</p>
              <span className={`text-sm shrink-0 ${text_color} opacity-70`}>
                {new Date(project.date).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
              </span>
            </div>

            <p className={`text-sm ${text_color}`}>{project.description}</p>

            <div className={`text-sm mt-auto pt-2 border-t border-rose-200 ${text_color} opacity-80`}>
              <span className="font-medium">Skills: </span>{project.skills}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProjectCards;