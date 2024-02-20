import Users from "../../models/model_user";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

export const signup = async (req, res) => {
    try {
        const existUser = await Users.findOne({ phoneNumber: req.body.phoneNumber }).exec();
        if (existUser) {
            return res.status(400).json({
                message: "Tài khoản đã tồn tại",
            });
        }
        const user = await new Users(req.body).save();
        return res.json({
            user: {
                _id: user._id,
                phoneNumber: user.phoneNumber,
                name: user.name,
            },
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};