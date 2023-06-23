import { drizzle } from "drizzle-orm/planetscale-serverless"
import { connect } from "@planetscale/database"

import { env } from "@/env.mjs"

// create the connection
const connection = connect({
  host: env.PSC_DATABASE_HOST,
  username: env.PSC_DATABASE_USERNAME,
  password: env.PSC_DATABASE_PASSWORD,
})

export const psc = drizzle(connection)
