import Category from "../../models/model_category";

export const get_Category = async (req, res) => {
    try {
        const get_category = await Category.findOne({ _id: req.params.id }).exec();
        return res.status(200).json(get_category);
    } catch (error) {
        res.status(400).json({
            error: "Không tìm thấy danh mục"
        })
    }
};