import type { ProjectType } from './types';
import { API_URL } from '@/env';

export const fetchProjects = async (): Promise<ProjectType[]> => {
  const response = await fetch(`${API_URL}/projects`);

  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }

  const data: { projects: ProjectType[] } = await response.json();
  return data.projects;
}

export const deleteProject = async (id: string) : Promise<boolean> => {
    const response = await fetch(`${API_URL}/projects/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error('Failed to delete project');
    }

    return true;
};

export const createProject = async (projectData: Partial<ProjectType>) : Promise<ProjectType> => {
    const response = await fetch(`${API_URL}/projects`, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(projectData),
    });

    if (!response.ok) {
        throw new Error('Failed to create project');
    }

    const data: ProjectType = await response.json();
    return data;
};

export const updateProject = async (id: string, description: string) : Promise<ProjectType> => {
    const response = await fetch(`${API_URL}/projects/${id}`, {
        method: 'PATCH',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ description }),
    });

    if (!response.ok) {
        throw new Error('Failed to update project');
    }
    
    const data: ProjectType = await response.json();
    return data;
};