import { Router } from "express";
import { contactUsController } from "../controllers/ContactUs.js";
const router = Router();

router.post("/contact", contactUsController);

export default router;

