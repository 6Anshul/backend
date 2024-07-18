import express from "express";
import { dashboard, login } from "../controllers/userController.js";
const userRoutes = express.Router();
userRoutes.route("/login").post(login);
import auth from "../middleware/auth.js";

userRoutes.route("/dashboard").get(auth,dashboard);
export default userRoutes;
