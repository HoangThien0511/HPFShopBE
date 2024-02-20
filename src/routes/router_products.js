import express from "express";
import { create_Products } from "../apis/Apis_products/create_Products";
import { edit_Product } from "../apis/Apis_products/edit_product";
import { get_NewProducts } from "../apis/Apis_products/get_new_products";
import { get_Product } from "../apis/Apis_products/get_product";
import { get_Products } from "../apis/Apis_products/get_Products";
import { limit_Products } from "../apis/Apis_products/limit_products";
import { remove_Product } from "../apis/Apis_products/remove_product";
import { impotProducts } from "../apis/Apis_products/importProduct";

const router = express.Router(0)

router.post("/products/news", create_Products);
router.get("/products", get_Products);
router.get("/products/:id", get_Product);
router.get("/products/limit/:limit", limit_Products);
router.get("/product/news", get_NewProducts);
router.delete("/products/remove/:id", remove_Product);
router.patch("/products/update/:id", edit_Product);
router.post("/products/import", impotProducts);



export default router