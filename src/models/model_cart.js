import mongoose, { Schema } from "mongoose";

const cartSchema = mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
  idProduct: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Products',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  size: {
    type: Object,
    required: true
  },

});

export default mongoose.model("Cart", cartSchema);
