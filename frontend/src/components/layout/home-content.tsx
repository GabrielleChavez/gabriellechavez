import Projects from "@/pages/Projects";
import ProjectCards from "../project/project-cards";

const Content = () => {
  return (
    <div>
      <div className="p-4 md:p-8 shadow-xl rounded-lg">
        {" "}
        {/* Add padding here */}
        <h1 className="text-2xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="mb-4">
          This is a showcase of my projects, research, and experience. Feel free
          to explore and learn more about my work.
        </p>
      </div>

      <div className="p-4 md:p-8 shadow-2xl rounded-lg mt-6">
        {" "}
        {/* Add padding and margin here */}
        <h1 className="text-2xl font-bold mb-4">About Me</h1>
        <p className="mb-4">
          Embedded & Full-Stack Software Engineer building IoT and data-driven
          systems spanning firmware, cloud services, and user applications.
          Experience developing sensor-driven platforms, real-time data
          pipelines, and React/Node applications. Interested in bridging
          physical devices with mobile and cloud software.
        </p>
        <h2 className="text-xl font-semibold mb-2">Background</h2>
        <p className="mb-4">
          I have a background in computer science and have worked on various
          projects in the field.
        </p>
        <h2 className="text-xl font-semibold mb-2">Experience</h2>
        <p className="mb-4">
          I have experience in software development, with a focus on creating
          efficient and scalable solutions.
        </p>
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <p className="mb-4">
          I am proficient in various programming languages and frameworks, and I
          continuously strive to improve my skills.
        </p>
      </div>
    </div>
  );
};

export default Content;
