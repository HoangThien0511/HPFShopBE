import mongoose, { Schema } from "mongoose";

const category_Schema = mongoose.Schema({
    name_category: {
        type: String
    }
})


const Category = mongoose.model("Categories", category_Schema)
export default Category