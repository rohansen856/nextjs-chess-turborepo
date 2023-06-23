"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pgTable = void 0;
var pg_1 = require("pg");
exports.pgTable = new pg_1.Pool({
    user: process.env.POSTGRES_DB_USER || "postgres",
    host: process.env.POSTGRES_DB_HOST || "db.nkpkvtpxnvlzsaddhsgm.supabase.co",
    database: process.env.POSTGRES_DB_DATABASE || "postgres",
    password: process.env.POSTGRES_DB_PASSWORD || "rohan0subarna",
    port: 5432,
});
