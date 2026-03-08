import { Hono } from "hono";
import projectsRouter from "./routes/projects";
import { cors } from "hono/cors";
import { HTTPException } from "hono/http-exception"; 
import { ZodError } from "zod";

const app = new Hono();

app.use('/*', cors({
    origin: 'http://localhost:5173',
}));

app.get("/", (c) => c.text("Hello Hono!"));

app.route("/projects", projectsRouter);

app.onError((err, c) => {
    if (err instanceof ZodError) {
        return c.json({ error: err.message }, 400);
    } else if (err instanceof HTTPException) {
        return c.json({ error: err.message }, err.status);
    }
    return c.json({ error: 'Internal server error' }, 500);
});

export default app;