import Product from "../../models/model_product";
export const get_Product = async (req, res) => {
    try {
        const get_product = await Product.findOne({ _id: req.params.id }).exec();
        return res.status(200).json(get_product);

    } catch (error) {
        res.status(400).json({
            error: "Không tìm thấy sản phẩm có id tương tự!"
        })
    }
};