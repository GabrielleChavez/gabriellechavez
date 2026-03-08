import { Hono } from 'hono';
import { db } from '../db';
import { projects } from '../db/schema';
import { eq } from 'drizzle-orm';
import { createProjectSchema, updateProjectSchema, getProjectSchema, deleteProjectSchema } from '../validators/schema';
import { zValidator } from '@hono/zod-validator';
import { HTTPException } from 'hono/http-exception';

const projectsRouter = new Hono();

projectsRouter.get('/', async (c) => {
    const allProjects = await db.select().from(projects);
    return c.json({ projects: allProjects });
});

projectsRouter.get('/:id', zValidator('param', getProjectSchema), async (c) => {
    const { id } = c.req.valid('param');
    const project = await db.query.projects.findFirst({
        where: eq(projects.id, id),
    });
    if (!project) {
        throw new HTTPException(404, { message: 'Project not found' });
    }
    return c.json({ project });
});

projectsRouter.delete('/:id', zValidator('param', deleteProjectSchema), async (c) => {
    const { id } = c.req.valid('param');
    await db.delete(projects).where(eq(projects.id, id));
    return c.json({ message: 'Project deleted' }, 200);
});

projectsRouter.patch('/:id', zValidator('param', updateProjectSchema), zValidator('json', updateProjectSchema), async (c) => {
    const { id } = c.req.valid('param');
    const data = c.req.valid('json');
    await db.update(projects).set(data).where(eq(projects.id, id));
    return c.json({ message: 'Project updated' }, 200);
});

export default projectsRouter;