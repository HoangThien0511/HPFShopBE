import Size from "../../models/model_size";

export const get_Size = async (req, res) => {
  try {

    const size = await Size.findOne({ _id: req.params.id }).exec();
    return res.status(200).json(size);

  } catch (error) {

    return res.status(400).json({
      error: "Không có thông tin phù hợp"
    })

  }
};
