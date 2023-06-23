import type { Config } from "drizzle-kit"

export default {
  schema: "./lib/psc.schema.ts",
  out: "./drizzle-schema",
  connectionString: process.env.PSC_DATABASE_URL,
} satisfies Config
