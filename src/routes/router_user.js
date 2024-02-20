import { Router } from "express";
import { isAdmin } from "../middlewares/checkRole";
import { firebaseVerifyIdToken } from "../middlewares/firebaseVerifyIdToken";
import { jwtVerifyToken } from "../middlewares/jwtVerifyToken";
import { checkPhoneNumberValid, getOneUser, getUserProfile, listUser, resetPassword, updateProfile, updateUser, updateUserpassword, userAccountManagement, userAccountStatistics } from "../apis/Apis_user/user";

const router = new Router();

router.get("/users", listUser);
router.put("/user/my-profile/edit", jwtVerifyToken, updateProfile);
router.get("/user/my-profile", jwtVerifyToken, getUserProfile);
router.get("/user/:id", jwtVerifyToken, isAdmin, getOneUser);
router.put("/user/edit/:id", jwtVerifyToken, isAdmin, updateUser);
router.get("/users/acccount-status-statistics", userAccountStatistics);
router.put("/update-password", jwtVerifyToken, updateUserpassword);
router.put("/reset-password", firebaseVerifyIdToken, resetPassword);
router.post('/check-valid-phone-number', checkPhoneNumberValid)

export default router;