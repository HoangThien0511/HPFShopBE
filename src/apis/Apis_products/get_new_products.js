import Product from "../../models/model_product";
export const get_NewProducts = async (req, res) => {
    try {

        const get_product = await Product.find().sort({ "createdAt": -1 }).limit(4);
        return res.status(200).json(get_product);
        
    } catch (error) {
        res.status(400).json({
            error: "Không tìm thấy sản phẩm có id tương tự!"
        })
    }
};