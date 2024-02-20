// import Category from "../../models/model_category";
// import Product from "../../models/model_product";

// export const get_Pr_Category = async (req, res) => {
//     try {
        
//         var list_products = Category.findOne({_id: "642075eb5ef24c95598534bf"}).populate("Product").exec()
//         return res.status(200).json(list_products);
//     } catch (error) {
//         res.status(400).json({
//             error: "Lấy danh sách sản phẩm không thành công!"
//         })
//     }
// };