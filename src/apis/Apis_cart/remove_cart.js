import Cart from "../../models/model_cart";

export const remove_cart = async (req, res) => {
  try {
    const remove_data = await Cart.findByIdAndDelete({_id: req.params.id}).exec();
    
    res.status(200).json({
      data: remove_data,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
