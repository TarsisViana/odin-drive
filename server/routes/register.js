import { Router } from "express";
const router = Router();

import { newMember } from "../controllers/register-controllers.js";

router.post("/", newMember);

export default router;
