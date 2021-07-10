import express from "express";
import {signup,signin} from "../controller/auth.js"
const router=express.Router();

router.post("/signin",signin);
router.post("/signup",signup);

export default router;