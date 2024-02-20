import { Router } from "express";
import {
    orderGenderStatistics,
    createOrder,
    listOrder,
    read,
    updateStatus,
    userOrderList,
    employeeOrderList2,
    statusStatistic,
} from "../apis/Apis_order/order";
import {
    isAdmin,
} from "../middlewares/checkRole";
import { jwtVerifyToken } from "../middlewares/jwtVerifyToken";



const router = Router();
router.post("/order", createOrder);
router.get("/order", listOrder);
router.get("/order/:id", read);
router.patch("/order/:id", updateStatus);
router.get("/order-history/:id", userOrderList);
router.get("/order-employee-list/:id", jwtVerifyToken);
router.get("/order-gender-statistics", jwtVerifyToken, isAdmin, orderGenderStatistics);
router.post("/orderAddByEmployee", createOrder);
router.get("/order-employee", employeeOrderList2);
router.get("/status-statistics", jwtVerifyToken, isAdmin, statusStatistic);
export default router;
