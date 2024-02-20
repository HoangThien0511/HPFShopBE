import Category from "../../models/model_category"

export const create_Categories = async (req, res) => {
    try {
        const new_category = await new Category(req.body).save()
        res.json(new_category)
    } catch (error) {
        res.status(400).json({
            error: "Danh sách danh mục sản phẩm hiện đang trống!"
        })
    }
}