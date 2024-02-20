import User from "../../models/model_user";
import bcrypt from "bcrypt";

export const listUser = async (req, res) => {
    try {
        const listUser = await User.find({}).sort({ createdAt: -1 }).exec();
        res.json(listUser);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

export const updateProfile = async (req, res) => {
    const updateData = {
        name: req.body.name,
        avatar: req.body.avatar,
        address: req.body.address,
        age: req.body.age,
        gender: req.body.gender,
    };
    try {
        const updateProfile = await User.findByIdAndUpdate(
            { _id: req.user._id },
            updateData,
            { new: true }
        )
            .select("-password")
            .exec();
        return res.json(updateProfile);
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

export const getUserProfile = async (req, res) => {
    try {
        const userProfile = await User.findByIdAndUpdate({ _id: req.user._id })
            .select("-password")
            .exec();
        return res.json(userProfile);
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

export const updateUser = async (req, res) => {
    const updateData = {
        name: req.body.name,
        avatar: req.body.avatar,
        address: req.body.address,
        age: req.body.age,
        gender: req.body.gender,
        status: req.body.status,
        role: req.body.role,

    };
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.id },
            updateData,
            { new: true }
        )
            .select("-password")
            .exec();
        return res.json(user);
    } catch (error) {
        return res.status(400).json();
    }
};
export const getOneUser = async (req, res) => {
    try {
        const userProfile = await User.findByIdAndUpdate({ _id: req.params.id })
            .select("-password")
            .exec();
        return res.json(userProfile);
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

export const userAccountStatistics = async (req, res) => {
    try {
        const totalUser = await User.countDocuments({}).exec();
        const unActiveUser = await User.countDocuments({ status: 0 }).exec();
        const availableUser = await User.countDocuments({ status: 1 }).exec();
        const lockUser = await User.countDocuments({ status: 2 }).exec();
        return res.json({
            totalUser,
            unActiveUser,
            availableUser,
            lockUser,
        });
    } catch (error) {
        return res.json(error.message);
    }
};

export const userAccountManagement = async (req, res) => {
    try {
        const totalUser = await User.countDocuments({}).exec();
        const userAccount = await User.countDocuments({ role: 0 }).exec();
        const adminUser = await User.countDocuments({ role: 1 }).exec();
        return res.json({
            totalUser,
            userAccount,
            adminUser,
        });
    } catch (error) {
        return res.json(error.message);
    }
};

export const updateUserpassword = async (req, res) => {
    let { currentPassword, newPassword, confirmPassword } = req.body;
    const { _id } = req.user;
    try {
        const user = await User.findOne({ _id }).exec();
        const matchCurrentPassword = await bcrypt.compare(
            currentPassword,
            user.password
        );
        if (matchCurrentPassword) {
            if (newPassword !== confirmPassword) {
                return res.status(400).json({
                    message: "Mật khẩu xác nhận không khớp.",
                });
            } else {
                const saltRounds = 10;
                newPassword = await bcrypt.hash(newPassword, saltRounds);

                const update = {
                    password: newPassword,
                };
                await User.findOneAndUpdate({ _id }, update).exec();
                return res.json({
                    message: "Cập nhật mật khẩu thành công.",
                });
            }
        } else {
            return res.status(400).json({
                message: "Mật khẩu hiện tại không đúng.",
            });
        }
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};

export const resetPassword = async (req, res) => {
    const { password, confirmPassword } = req.body;

    const phoneNumber = req.user.phone_number.replace("+84", 0);
    try {
        if (password !== confirmPassword) {
            return res.status(400).json({
                message: "Mật khẩu xác nhận không khớp.",
            });
        } else {
            const saltRounds = 10;
            const hashPassword = await bcrypt.hash(password, saltRounds);
            const update = {
                password: hashPassword,
            };
            await User.findOneAndUpdate({ phoneNumber }, update).exec();
            return res.json({
                message: "Cập nhật mật khẩu thành công.",
            });
        }
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};

export const checkPhoneNumberValid = async (req, res) => {
    try {
        const isValid = await User.findOne({ phoneNumber: req.body.phoneNumber }).exec()
        if (isValid) {
            return res.json({
                message: "Xác nhận tài khoản của bạn."
            })
        }
        else {
            return res.status(400).json({
                message: 'Không tìm thấy tài khoản.'
            })
        }
    } catch (error) {
        return res.json(
            error.message
        )
    }
}
