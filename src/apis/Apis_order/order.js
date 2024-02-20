import Order from "../../models/model_order";
import Users from "../../models/model_user";

export const createOrder = async (req, res) => {
    try {
        const newOrder = await new Order(req.body).save()
        return res.json(newOrder)
    } catch (error) {
  
      return res.status(400).json({
        error: "Đặt hàng không thành công"
      })
    }
};

export const getOrderUser = async (req, res) => {
    try {
        
        const dataOrder = await Order.find()
        
        return res.status(200).json(dataOrder);
    
    } catch (error) {
  
      return res.status(400).json({
        error: "Đặt hàng không thành công"
      })
      
    }
};

export const updateOrder = async (req, res) => {
    try {
        
        const dataOrder = await Order.findByIdAndUpdate({ _id: req.params.id },req.body,{ new: true }).exec();
        
        return res.status(200).json(dataOrder);
    
    } catch (error) {
  
      return res.status(400).json({
        error: "Cập nhật thông tin đơn hàng không thành công"
      })
      
    }
};
  
export const detailOrder = async (req, res) => {
    try {
        
        const dataOrder = await Order.findOne({ orderCode: req.params.id }).exec();
        
        return res.status(200).json(dataOrder);
    
    } catch (error) {
  
      return res.status(400).json({
        error: "Cập nhật thông tin đơn hàng không thành công"
      })
      
    }
};
  