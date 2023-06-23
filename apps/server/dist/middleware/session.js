import { db } from "../db/index.js";
import PGSimple from "connect-pg-simple";
import session from "express-session";
import { nanoid } from "nanoid";
const PGSession = PGSimple(session);
const sessionMiddleware = session({
    store: new PGSession({ pool: db, createTableIfMissing: true }),
    secret: process.env.SESSION_SECRET || "whatever this is",
    resave: false,
    saveUninitialized: false,
    name: "chessu",
    proxy: true,
    cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        secure: process.env.NODE_ENV === "production" ? true : false,
        httpOnly: true,
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    },
    genid: function () {
        return nanoid(21);
    },
});
export default sessionMiddleware;
