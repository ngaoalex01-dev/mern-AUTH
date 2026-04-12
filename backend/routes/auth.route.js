import { signup , login , logout, verifyEmail, forgotPassword, resetPassword, checkAuth } from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
import express from "express";

const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth)

router.post("/signup",signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/verify-email", verifyEmail);
router.post("/forgot-Password", forgotPassword);
router.post("/reset-Password/:token", resetPassword);

export default router;
