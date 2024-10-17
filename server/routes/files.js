import { Router } from "express";
const router = Router();

import multer from "multer";
const upload = multer({ dest: "./uploads/" });

router.post("/upload", upload.single("upload"), function (req, res, next) {
  console.log(req.file);
});

export default router;
