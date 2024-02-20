import Product from "../../models/model_product";

export const limit_Products = async (req, res) => {
    try {

        const products = await Product.find().limit(req.params.limit);
        return res.status(200).json(products);

    } catch (error) {

         res.status(400).json({
            error: "Lấy danh sách sản phẩm không thành công!"
         })
        
    }
}