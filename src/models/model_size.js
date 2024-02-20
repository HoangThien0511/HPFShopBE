import mongoose from "mongoose";

const size_Schema = mongoose.Schema({
  size_name: {
    type: String,
  },
  size_price: {
    type: String,
  }
});

const Sizes = mongoose.model("Sizes", size_Schema)
export default Sizes
