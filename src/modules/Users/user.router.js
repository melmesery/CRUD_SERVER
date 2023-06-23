import { Router } from "express";
import * as userController from "./controller/user.js"; 
const router = Router();

router.put("/", userController.updateUser);

router.delete("/", userController.deleteUser);

router.get("/profile", userController.profile);

router.put("/update-password", userController.updateUserPassword);

export default router;
