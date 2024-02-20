import Category from "../../models/model_category";

export const get_Categories = async (req, res) => {
    try {
        const data = await Category.find();
        return res.status(200).json(data);
    } catch (error) {
        res.status(400).json({
            error: "Không tìm thấy danh mục"
        })
    }
};