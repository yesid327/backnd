import { Order } from "../models/Orders.models";
import { responseHandler } from "../middlewares/responseHandler.middlewares";

export const getAllOrder = async (req, res, next) =>{
    try{
        const user  = req.user;
        let orders = null;
        if(user.id_rol == 1){
            orders = await Order.findAll({
                where:{
                    domiciliary: 1
                }
            });
        }else{
            orders = await Order.findAll();
        }
        
        if(orders.length <= 0 ){
            return responseHandler(res, 404, true, "Orders not found", null);
        }

        return responseHandler(res, 200, false, "Orders found", orders);
    }catch(err){
        next(err);
    }
}

export const getOrderId = async (req, res, next) =>{
    try{
        const { id } = req.params;

        const searchOrder = await Order.findByPk(id);

        if(searchOrder <= 0){
            return responseHandler(res, 404, true, "Order not found", null);
        }

        return responseHandler(res, 200, false, "Order found", searchOrder);
    }catch(err){
        next(err);
    }
}

export const createOrder = async(req, res, next) =>{
    try{
        const  user  = req.user;
        const { content, description, cost, payment_method, delivery_time, customer, domiciliary } = req.body;

        console.log(user.id_rol)
        if(user.id_rol == 2){ 
            const orderData = {
                content,
                description,
                cost,
                payment_method,
                delivery_time,
                customer, 
                domiciliary,
                order_data: new Date().toDateString,
                status: 0
            }
            const newOrder = Order.create(orderData);

            const dataResponse = {
                id_order: newOrder.id_order
            }

            return responseHandler(res, 200, false, "Order created", dataResponse);
        }
    }catch(err){
        return responseHandler(res, 401, true, "Unauthorized", null);
    }
}
export const deleteOrderId = async(req, res, next) =>{
    try{
        const { id } = req.params;
        console.log(id)
        Order.destroy({
            where:{
                id_order: id
            }
        })

        return responseHandler(res, 200, false, "Order delete", null);
    }catch(err){
        return responseHandler(res, 401, true, "Unauthorized", null);
    }
}


