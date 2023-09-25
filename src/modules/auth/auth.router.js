import { Router } from "express";
import { isValid } from "../../middlewares/validation.middleware.js";
import {
  activateSchema,
  changePasswordSchema,
  forgetCodeSchema,
  loginSchema,
  registerSchema,
  resetPasswordSchema,
} from "./auth.validation.js";
import {
  activateAccount,
  changePassword,
  deleteAccount,
  logOut,
  login,
  register,
  resetPassword,
  sendForgetCode,
} from "./auth.controller.js";
import { isAuthenticated } from "../../middlewares/authentication.middleware.js";
const router = Router();

// register
router.post("/register", register);

// activate account
router.get(
  "/confirmEmail/:activationCode",
  isValid(activateSchema),
  activateAccount
);

// login
router.post("/login", isValid(loginSchema), login);

// change password
router.patch(
  "/changePassword",
  isValid(changePasswordSchema),
  isAuthenticated,
  changePassword
);

// send forget password code
router.patch("/forgetCode", isValid(forgetCodeSchema), sendForgetCode);

// reset password
router.patch("/resetPassword", isValid(resetPasswordSchema), resetPassword);

// logOut
router.get("/logout", isAuthenticated, logOut);

// delete account
router.delete("/delete/account", isAuthenticated, deleteAccount);

export default router;
