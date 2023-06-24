import { drizzle } from "@rcsen/database";

import { connect } from "@planetscale/database"

// create the connection
const connection = connect({
  host: process.env.PSC_DATABASE_HOST,
  username: process.env.PSC_DATABASE_USERNAME,
  password: process.env.PSC_DATABASE_PASSWORD,
})

export const psc = drizzle(connection)