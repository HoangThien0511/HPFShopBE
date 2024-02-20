import Category from "../../models/model_category";

export const edit_Categories = async (req, res) => {
    try {

        const update_category = await Category.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        ).exec();
        return res.status(200).json(update_category);

    } catch (error) {
        return res.status(400).json({
            error: "Không thể cập nhật mới danh mục"
        })
    }
};