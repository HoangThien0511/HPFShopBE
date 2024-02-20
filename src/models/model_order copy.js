import mongoose, { Schema } from "mongoose";
const { ObjectId } = mongoose.Types;

const orderSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        address: {
            type: String,
        },
        phoneNumber: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        note: {
            type: String,
        },
        status: {
            type: Number,
            default: 0,
        },
        userId: {
            type: ObjectId,
            ref: "Users",
            required: false
        },
        products: [
            {
                productId: {
                    type: ObjectId,
                    ref: "Products"
                },
                price: {
                    type: Number
                },
                name: {
                    type: String,
                },
                quantity: {
                    type: Number
                }
            }
        ],
        employeeId: {
            type: ObjectId,
            ref: "Employee",
        },
        orderPrice: {
            type: Number
        },
        voucher: {
            type: ObjectId,
            ref: 'Voucher'
        }
    },
    { timestamps: true }
);
orderSchema.index({ employeeId: -1 })
export default mongoose.model("Orders", orderSchema);
