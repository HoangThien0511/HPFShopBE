import mongoose, { Schema } from "mongoose";

const payment_schema = mongoose.Schema({
    payment_name: {
        type: String
    }
})


const Payments = mongoose.model("Payments", payment_schema)
export default Payments