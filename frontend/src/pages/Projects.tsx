// Projects.tsx
import ProjectCards from "@/components/project/project-cards";
import { text_color, background_color } from "@/lib/color-palatte";

const Projects = () => {
  return (
    <div className="p-4 md:p-8 flex flex-col gap-6">
      <div className={`shadow-2xl rounded-lg p-4 md:p-8 ${background_color}`}>
        <h2 className={`text-2xl font-bold mb-2 ${text_color}`}>My Projects</h2>
        <p className={`${text_color}`}>
          A showcase of my work, from web applications to embedded systems. Feel free to explore! Note I am currently working to adding all my projects to my github! 
        </p>
      </div>
      <ProjectCards />
    </div>
  );
};

export default Projects;