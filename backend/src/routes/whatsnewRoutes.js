import express from "express";

import {
  getWhatsNew,
  createWhatsNew,
  updateWhatsNew,
  deleteWhatsNew
} from "../controllers/whatsNewController.js";

const router = express.Router();

router.get("/", getWhatsNew);

router.post("/", createWhatsNew);

router.patch("/:id", updateWhatsNew);

router.delete("/:id", deleteWhatsNew);

export default router;