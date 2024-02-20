import Product from "../../models/model_product";
export const edit_Product = async (req, res) => {
    try {

        const update_product = await Product.findByIdAndUpdate({ _id: req.params.id },req.body,{ new: true }).exec();
        return res.status(200).json(update_product);

    } catch (error) {
        res.status(400).json({
            error: "Cập nhật sản phẩm không thành công!"
        })
    }
};