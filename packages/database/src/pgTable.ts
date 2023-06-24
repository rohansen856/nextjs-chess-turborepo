import { Pool } from "pg"

export const pgTable = new Pool({
  user: process.env.POSTGRES_DB_USER || "postgres",
  host: process.env.POSTGRES_DB_HOST || "db.nkpkvtpxnvlzsaddhsgm.supabase.co",
  database: process.env.POSTGRES_DB_DATABASE || "postgres",
  password: process.env.POSTGRES_DB_PASSWORD || "rohan0subarna",
  port: 5432,
})
