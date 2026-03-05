import type { ProjectType } from "@/data/types";
import useQueryProjects from "@/hooks/use-query-projects";

const ProjectCards = () => {
  const { projects } = useQueryProjects();

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Use grid with gap */}
        {projects
          .sort((a, b) => (a.date > b.date ? -1 : 1))
          .map((project : ProjectType) => (
            <div key={project.id} className="w-full">
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectCards;