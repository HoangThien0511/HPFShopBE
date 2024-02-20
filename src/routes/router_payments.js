
import express from "express";
import { create_Payments } from "../apis/Apis_payments/create_payment";
import { get_payment } from "../apis/Apis_payments/get_PAYMENT";
import { get_Payments } from "../apis/Apis_payments/get_Payments";
import { remove_Payments } from "../apis/Apis_payments/remove_Payments";
import { update_Payments } from "../apis/Apis_payments/update_Payments";

const router = express.Router(0)

router.post("/payments/news", create_Payments);
router.get("/payments", get_Payments);
router.get("/payments/:id", get_payment);
router.delete("/payments/remove/:id", remove_Payments);
router.patch("/payments/update/:id", update_Payments);


export default router