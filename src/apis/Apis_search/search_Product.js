import Product from '../../models/model_product';
import Category from '../../models/model_category';
// import Category from '../../models/model_category';

export const searchProduct = async (req, res) => {
    try {
        const { name, size, price } = req.query;
        const nameQuery = name ? { product_name: { $regex: name, $options: 'i' } } : {};
        const sizeQuery = size ? { product_size: size } : {};
        const priceQuery = price ? { product_price: { $lte: parseInt(price) } } : {};

        const products = await Product.find({
            ...nameQuery,
            ...sizeQuery,
            ...priceQuery,
        })
        // .limit(8);
        // .populate('Category').exec();

        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: true, message: 'Internal Server Error' });
    }
};




