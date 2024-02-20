import mongoose from "mongoose";

const color_Schema = mongoose.Schema({
  color_name: {
    type: String,
  }
});

const Colors = mongoose.model("Colors", color_Schema)
export default Colors
