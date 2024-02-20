import Cart from "../../models/model_cart";

export const add_cart = async (req, res) => {
  try {
    
    const newCart = await new Cart(req.body).save()
    
    return res.json(newCart)

  } catch (error) {

    return res.status(400).json({
      error: "Thêm sản phẩm vào giỏ hàng không thành công"
    })
    
  }
};
