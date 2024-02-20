import Cart from "../../models/model_cart";
import Users from "../../models/model_user";

export const getCartUser = async (req, res) => {
  try {
    const dataCart = await Cart.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "idUser",
          foreignField: "_id",
          as: "user"
        }
      },
      {
        $lookup: {
          from: "products",
          localField: "idProduct",
          foreignField: "_id",
          as: "Product"
        }
      }
    ])

    return res.status(200).json(dataCart);

  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
