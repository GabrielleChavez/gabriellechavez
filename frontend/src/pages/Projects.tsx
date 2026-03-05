import ProjectCards from "@/components/project/project-cards";

const Projects = () => {
  return (
    <div className="p-4 md:p-8"> {/* Add padding here */}
      <h2 className="text-2xl font-bold mb-4">Welcome to My Projects</h2>
      <p className="mb-4">
        This is a showcase of my projects, from simple web applications and electrical projects to complex software systems. Feel free to explore and learn more about my work.
      </p>
      <h3 className="text-xl font-semibold mb-2">Projects</h3>
      <ProjectCards />
    </div>
  );
}

export default Projects;