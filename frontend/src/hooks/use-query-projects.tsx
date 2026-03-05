import { useEffect } from "react";
import { fetchProjects } from "@/data/api";
import { useStore } from "@nanostores/react";
import { $projects, setProjects } from "@/lib/project-store";
import { toast } from "sonner";


/**
 * 
 * @returns complied projects
 */
export const useQueryProjects = () => {
  const projects = useStore($projects);

  const loadProjects = async () => {
    try {
      const fetchedProjects = await fetchProjects();
      setProjects([...fetchedProjects]);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      toast.error(`Failed to load projects: ${errorMessage}`);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return { projects };

};

export default useQueryProjects;