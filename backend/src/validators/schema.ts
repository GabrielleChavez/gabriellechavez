import { z } from 'zod';

export const createProjectSchema = z.object({
    id: z.string().min(3).max(20).regex(/^[a-z0-9-]+$/),
    date: z.string(),
    title: z.string().min(3).max(100),
    description: z.string().min(3).max(1000),
    skills: z.string().min(3).max(100),
    tags: z.array(z.string()),
    link: z.string().url(),
});

export const updateProjectSchema = z.partial(createProjectSchema);

export const getProjectSchema = z.object({
    id: z.string().min(3).max(20).regex(/^[a-z0-9-]+$/),
});

export const getProjectsSchema = z.object({
    tags: z.array(z.string()),
});

export const deleteProjectSchema = z.object({
    id: z.string().min(3).max(20).regex(/^[a-z0-9-]+$/),
});