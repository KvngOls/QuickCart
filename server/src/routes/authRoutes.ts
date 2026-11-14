// authRoutes.ts server/src/routes/authRoutes.ts
// Which URL runs which auth function. routes/index.ts puts these under /api/auth.

import { Router } from "express";
import {
  checkEmail,
  login,
  logout,
  register,
  getMe,
  forgotPassword,
  checkResetToken,
  resetPassword,
  sendVerification,
  verifyEmail,
} from "../controllers/authController";
import { protect } from "../middleware/auth";

// STEP 18 (part 4): The auth routes

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/check-email", checkEmail);
router.get("/me", protect, getMe); // protect runs first; getMe only runs if it calls next()
router.post("/logout", protect, logout);
router.post("/forgot-password", forgotPassword);
router.get("/reset-password/:token", checkResetToken);
router.post("/reset-password/:token", resetPassword);
router.post("/send-verification", protect, sendVerification);
router.post("/verify-email", protect, verifyEmail);

export default router;
