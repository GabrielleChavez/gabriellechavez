// project-card.tsx

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"; // UI components
import type { ProjectType } from "@/data/types"; // Type definition
import { Button } from "@/components/ui/button"; // Button component
import ProjectCardAction from "./project-card-action"; // Action component for edit/delete

type ProjectCardProps = {
  project: ProjectType;
  //setProjects: React.Dispatch<React.SetStateAction<ProjectType[]>>;
};

// Define the ProjectCard component
const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="w-full max-w-sm">
      {/* Header section for the project */}
      <CardHeader>
      <div className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>{project.title}</CardTitle>
      
        </div>
        <ProjectCardAction project={project} />
      </div>
      <CardDescription>{project.description}</CardDescription>
    </CardHeader>

      {/* Content section for project details */}
      <CardContent>
        {/* Project content could be a detailed description, skills used, etc. */}
        <p>Skills: {project.skills}</p>
        <p>Date: {project.date}</p>
      </CardContent>

      {/* Footer section for additional actions or links, if any */}
      <CardFooter>
        <Button
          variant="link"
          onClick={() => window.open(project.link, "_blank")}
        >
          View Project
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
