import cors from "cors"
import "dotenv/config"
import { INIT_TABLES, db } from "./db/index.js"
import session from "./middleware/session.js"
import routes from "./routes/index.js"
import { init as initSocket } from "./socket/index.js"
import type { NextFunction, Request, Response } from "express"
import express from "express"
import { createServer } from "http"
import { Server } from "socket.io"

const corsConfig = {
  origin: process.env.CORS_ORIGIN || "http://localhost:3000",
}

const app = express()
const server = createServer(app)

// database
await db
  .connect()
  .then((res) => console.log(`database connected successfully`))
  .catch((err) => console.log(err))

// middleware
app.use(cors(corsConfig))
app.use(express.json())
app.set("trust proxy", 1)
app.use(session)
app.use("/v1", routes)

// socket.io
export const io = new Server(server, {
  cors: corsConfig,
  pingInterval: 30000,
  pingTimeout: 50000,
})
io.use((socket, next) => {
  session(socket.request as Request, {} as Response, next as NextFunction)
})
io.use((socket, next) => {
  const session = socket.request.session
  next()

  if (session && session.user) {
    console.log("session found")
  } else {
    console.log("no session")
  }
})
initSocket()

const port = process.env.PORT || 3001
server.listen(port, () => {
  console.log(`api server listening on :${port}`)
})
