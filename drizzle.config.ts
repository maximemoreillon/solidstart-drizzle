// import { type Config } from "drizzle-kit";

export default {
  // dialect: "sqlite", // "mysql" | "sqlite" | "postgresql"
  schema: "./drizzle/schema.ts",
  out: "./drizzle/migrations/",
  driver: "better-sqlite",
  dbCredentials: {
    url: "./drizzle/db.sqlite",
  },
}
