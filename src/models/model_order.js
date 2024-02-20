import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users',
        },
        orderCode: {
            type: String
        },
        userName: {
            type: String
        },
        address: {
            type: String
        },
        phoneNumber: {
            type: String
        },
        totalCheck: {
            type: Number
        },
        note: {
            type: String
        },
        status: {
            type: Number,
            default: 0,
        },
        product: {
            type: Array
        }
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema)
export default Order