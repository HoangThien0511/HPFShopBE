import Product from "../../models/model_product";

export const remove_Product = async (req, res) => {
    try {

        const remove_product = await Product.findByIdAndRemove({_id: req.params.id,}).exec();
        return res.status(200).json(remove_product);
        
    } catch (error) {
        res.status(400).json({
            error: "Xóa sản phẩm không thành công!"
        })
    }
};