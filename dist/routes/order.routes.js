import { Router } from 'express'
import { getAllOrder, createOrder, getOrderId, deleteOrderId } from '../controllers/order.controllers'
import { checkToken } from '../middlewares/checkAuth.middlewares'

const router = Router()

router.get("/orders", checkToken, getAllOrder);
router.delete("/order/:id", checkToken, deleteOrderId);
router.get("/order/:id", checkToken, getOrderId);
router.post("/order/new", checkToken, createOrder);

export default router