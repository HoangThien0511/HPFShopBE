import Sizes from "../../models/model_size";

export const create_Size = async (req, res) => {
  try {

    const size = await new Sizes(req.body).save();
    return res.status(200).json(size);

  } catch (error) {
    
    return res.status(400).json({
      error: "Thêm mới size không thành công"
    })

  }
};
