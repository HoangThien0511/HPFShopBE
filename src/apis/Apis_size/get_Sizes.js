import Size from "../../models/model_size";

export const get_Sizes = async (req, res) => {
  try {

    const data = await Size.find();
    return res.status(200).json(data);

  } catch (error) {

    return res.status(400).json({
      error: "Lấy danh sách size không thành công"
    })

  }
};
