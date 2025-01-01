import { Router } from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { test, updateUser } from "../controller/user.controller.js";

const router = Router();

router.get("/test", test);
router.put("/update/:userId", verifyToken, updateUser);

export default router;
