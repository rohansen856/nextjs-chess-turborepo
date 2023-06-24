import type { Config } from "drizzle-kit"

export default {
  schema: "./src/drizzleDb.schema.ts",
  out: "./dist/drizzle-schema",
  connectionString: process.env.PSC_DATABASE_URL,
} satisfies Config
