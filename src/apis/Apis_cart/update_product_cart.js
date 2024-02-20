import Cart from "../../models/model_cart";

export const updateCart = async (req, res) => {
  try {
    const cartUpdate = await Cart.findByIdAndUpdate({ _id: req.params.id },req.body,{ new: true }).exec();
    
    return res.json(cartUpdate)

  } catch (error) {

    res.status(500).json({
      message: error,
    });
    
  }
};
