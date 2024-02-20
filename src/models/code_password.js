import mongoose, { Schema } from "mongoose";

const codeSchema = mongoose.Schema({
    code_pass: {
        type: String,
    },
    createAt: {
        type: Date,
        default: Date()
    }
});

const Code_pass = mongoose.model("Code_Pasword", codeSchema)
export default Code_pass
