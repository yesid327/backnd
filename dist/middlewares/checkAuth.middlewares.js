import { verifyJWT } from '../helpers/jwt.helpers'
import { responseHandler } from './responseHandler.middlewares'

export const checkToken = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = await verifyJWT(token)
  if (!decoded) {
    return responseHandler(res, 401, true, 'Unauthorized', null)
  }

  req.user = decoded

  next()
}