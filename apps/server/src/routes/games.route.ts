import * as controller from "../controllers/games.controller.js"
import { Router } from "express"

const router = Router()

router.route("/").get(controller.getGames).post(controller.createGame)

router.route("/:code").get(controller.getActiveGame)

export default router
