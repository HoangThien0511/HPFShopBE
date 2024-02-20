import Users from "../../models/model_user";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

export const signin = async (req, res) => {
    const { password, phoneNumber } = req.body
    try {
        const user = await Users.findOne({ phoneNumber }).exec()
        if (!user) {
            return res.status(400).json({
                message: "Số điện thoại không hợp lệ."
            })
        }
        if (user.status == 0) {
            return res.status(400).json({
                message: "Tài khoản bạn chưa xác thực",
                code: 'NEEDVERIFY'
            })
        }
        else if (user.status == 2) {
            return res.status(400).json({
                message: "Tài khoản bạn bị khoá",
                code: 'LOCKACCOUNT'
            })
        }
        else if (user.status == 1) {
            const token = jwt.sign({ _id: user._id, role: user.role, }, "datn", { expiresIn: "7h" }, { algorithm: 'HS256' })
            const refreshToken = jwt.sign({ _id: user._id, role: user.role, }, "datn", { expiresIn: "1d" }, { algorithm: 'HS256' })
            const match = await bcrypt.compare(password, user.password)
            if (match) {
                if (user) {
                    return res.json({
                        message: 'Login Success',
                        id: user._id,
                        phoneNumber: user.phoneNumber,
                        name: user.name,
                        avatar: user.avatar,
                        token,
                        refreshToken,
                        role: user.role,
                    })
                }
                else {
                    return res.json({
                        message: 'Login Success',
                        id: user._id,
                        phoneNumber: user.phoneNumber,
                        name: user.name,
                        avatar: user.avatar,
                        token,
                        refreshToken,
                        role: user.role,
                    })
                }
            }
            else {
                return res.status(400).json({
                    message: "Số điện thoại / Email hoặc mật khẩu không đúng"
                })
            }
        }
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}


export const changeStatusAccount = async (req, res) => {
    const { status, phone } = req.query

    try {
        const user = await Users.findOneAndUpdate({ phoneNumber: phone }, { status: status }, { new: true }).select('-password').exec()
        return res.json({
            message: "Success",
            user
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}