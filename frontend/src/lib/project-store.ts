import { atom } from "nanostores";
import type { ProjectType } from "@/data/types";

export const $projects = atom<ProjectType[]>([]);

export function setProjects(projects: ProjectType[]) {
  $projects.set(projects);
}

export function addProject(project: ProjectType) {
  $projects.set([...$projects.get(), project]);
}

export function removeProject(projectId: string) {  
    $projects.set($projects.get().filter((project) => project.id !== projectId));   
}

export function updateProjectDescription(id: string, newDescription: string) {
  $projects.set(
    $projects.get().map((project) => {
      if (project.id === id) {
        return { ...project, description: newDescription };
      }
      return project;
    })
  );
}

export function toggleAddProjectCard() {
  $projects.set($projects.get());
}