import { createProject, deleteProject, updateProject } from "@/data/api";
import {
  addProject,
  removeProject,
  updateProjectDescription,
} from "@/lib/project-store";
import type { ProjectType } from "@/data/types";
import { toast } from "sonner";

/**
 *The term “mutation” in the custom hook name useMutationPosts is inspired by GraphQL,
  where mutations are used to modify data. This custom hook encapsulates the logic for 
  mutating posts and provides a clean interface for components to interact with the posts state.
 * @returns
 */
function useMutationProjects() {
  const handleCreateProject = async (projectData: Partial<ProjectType>) => {
    try {
      const newProject = await createProject(projectData);
      addProject(newProject);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      toast.error(`Failed to create project: ${errorMessage}`);
    }
  };

  const deleteProjectById = async (projectId: string) => {
    try {
      await deleteProject(projectId);
      removeProject(projectId);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      toast.error(`Failed to delete project: ${errorMessage}`);
    }
  };

  const handleUpdateProject = async (
    projectId: string,
    projectDescription: string,
  ) => {
    try {
      const updatedProject = await updateProject(projectId, projectDescription);
      updateProjectDescription(projectId, updatedProject.description);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      toast.error(`Failed to update project: ${errorMessage}`);
    }
  };

  return { handleCreateProject, deleteProjectById, handleUpdateProject };
}

export default useMutationProjects;
