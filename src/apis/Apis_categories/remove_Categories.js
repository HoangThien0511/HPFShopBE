import Category from "../../models/model_category";

export const remove_Category = async (req, res) => {
    try {
        const remove_category = await Category.findByIdAndRemove({
            _id: req.params.id,
        }).exec();
        return res.status(200).json(remove_category);
    } catch (error) {
        res.status(400).json({
            error: "Xóa danh mục sản phẩm không thành công!"
        })
    }
};