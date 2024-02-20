import { Router } from "express";
import { createOrder, detailOrder, getOrderUser, updateOrder } from "../apis/Apis_order/order";

const router = Router();

router.post("/order", createOrder);
router.get("/orders", getOrderUser);
router.patch("/orders/update/:id", updateOrder);
router.get("/orders/:id", detailOrder);

export default router;
