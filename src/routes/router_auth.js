import express from "express";
import { firebaseVerifyIdToken } from "../middlewares/firebaseVerifyIdToken";
import { changeStatusAccount, signin } from "../apis/Apis_checkAuth/signIn";
import { signup } from "../apis/Apis_checkAuth/signUp";


const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.put('/change-account-status', firebaseVerifyIdToken, changeStatusAccount)

export default router;
