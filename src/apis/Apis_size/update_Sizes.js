import Size from "../../models/model_size";

export const update_Sizes = async (req, res) => {
  try {
    const size = await Size.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    ).exec();
    return res.status(200).json(size);
  } catch (error) {

    return res.status(400).json({
      error: "Cập nhật size không thành công"
    })

  }
};
