import mongoose, { Schema } from 'mongoose';

const productSchema = mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    product_discount: {
        type: Number,
    },
    product_name: {
        type: String,
    },
    product_price: {
        type: Number,
    },
    product_size: {
        type: Array,
    },
    product_desc: {
        type: String,
    },
    product_color: {
        type: Array,
    },
    product_images: {
        type: Array,
    },
},
{
    timestamps: true,
});

const Product = mongoose.model('Products', productSchema);

export default Product;
