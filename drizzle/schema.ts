import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core"

export const Movies = sqliteTable("movies", {
  id: integer("id").primaryKey().unique().notNull(),
  title: text("title").notNull().default(""),
})
