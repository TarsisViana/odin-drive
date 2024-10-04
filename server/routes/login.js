import { Router } from "express";
const router = Router();

import passport from "passport";

router.post(
  "/",
  passport.authenticate("local", {
    failureMessage: true,
    successMessage: true,
  }),
  (req, res) => {
    res.json(req.session.messages);
  }
);

export default router;
