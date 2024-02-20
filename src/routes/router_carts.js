import express from "express";
import { add_cart } from "../apis/Apis_cart/create_Cart";
import { getCartUser } from "../apis/Apis_cart/get_cart_by_userId";
import { updateCart } from "../apis/Apis_cart/update_product_cart";
import { remove_cart } from "../apis/Apis_cart/remove_cart";


const router = express.Router();


router.get("/carts", getCartUser);
router.post("/cart", add_cart);
router.patch("/cart/update/:id", updateCart);
router.delete("/cart/remove/:id", remove_cart);
// router.patch("/cart/:id", update_product_cart);

export default router;
