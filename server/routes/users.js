import { Router } from "express";
const router = Router();

import { newUser } from "../controllers/user-controllers.js";

//Register new user
router.post("/", newUser);

export default router;
