import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const projects = sqliteTable("projects", {
    id: text("id").primaryKey(),
    date: integer("date").notNull(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    skills: text("skills").notNull(),
    tags: text("tags").notNull(),
    link: text("link"),
});