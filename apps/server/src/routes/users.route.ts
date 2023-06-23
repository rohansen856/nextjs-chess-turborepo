import * as controller from "../controllers/users.controller.js";
import { Router } from "express";

const router = Router();

router.route("/:name").get(controller.getUserProfile);

export default router;
