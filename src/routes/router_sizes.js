import express from "express";
import { create_Size } from "../apis/Apis_size/create_Size";
import { get_Size } from "../apis/Apis_size/get_Size";
import { get_Sizes } from "../apis/Apis_size/get_Sizes";
import { remove_Size } from "../apis/Apis_size/remove_Size";
import { update_Sizes } from "../apis/Apis_size/update_Sizes";


const router = express.Router();

router.post("/sizes/news", create_Size);
router.get("/sizes/:id", get_Size);
router.get("/sizes", get_Sizes);
router.delete("/sizes/remove/:id", remove_Size);
router.patch("/sizes/update/:id", update_Sizes);

export default router;
