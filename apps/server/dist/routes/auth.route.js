import * as controller from "../controllers/auth.controller.js";
import { Router } from "express";
const router = Router();
router.route("/").get(controller.getCurrentSession);
export default router;
