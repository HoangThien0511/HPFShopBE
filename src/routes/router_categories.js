import express from "express";
import { create_Categories } from "../apis/Apis_categories/create_Categories";
import { edit_Categories } from "../apis/Apis_categories/edit_Categories";
import { get_Categories } from "../apis/Apis_categories/get_Categories";
import { get_Category } from "../apis/Apis_categories/get_category";
// import { get_Pr_Category } from "../apis/Apis_categories/get_Pr_Category";
import { remove_Category } from "../apis/Apis_categories/remove_Categories";

const router = express.Router(0)
router.post("/categories/news", create_Categories);
// router.get("/categories/products", get_Pr_Category);
router.get("/categories", get_Categories);
router.get("/categories/:id", get_Category);
router.delete("/categories/remove/:id", remove_Category);
router.patch("/categories/update/:id", edit_Categories);


export default router