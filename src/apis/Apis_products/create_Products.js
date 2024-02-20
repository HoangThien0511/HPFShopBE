import Product from "../../models/model_product"

export const create_Products = async (req, res) => {
    try {

        const new_product = await new Product(req.body).save()
        return res.json(new_product)
        
    } catch (error) {
        return res.status(400).json({
            error: "Thêm mới sản phẩm không thành công"
        })
    }
}