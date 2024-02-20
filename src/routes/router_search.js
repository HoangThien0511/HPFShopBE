import express from "express";
import { searchProduct } from "../apis/Apis_search/search_Product";

const router = express.Router(0)

router.get('/product', searchProduct);

export default router