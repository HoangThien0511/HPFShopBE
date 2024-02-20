import Size from "../../models/model_size";

export const remove_Size = async (req, res) => {
  try {
    const size = await Size.findByIdAndRemove({
      _id: req.params.id,
    }).exec();
    return res.status(200).json(size);
  } catch (error) {

    return res.status(400).json({
      error: "Xóa thông tin không thành công"
    })

  }
};
