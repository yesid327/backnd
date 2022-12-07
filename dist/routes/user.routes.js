import { Router } from 'express'
import { createUser, getAllUser, getUserId} from '../controllers/user.controllers'
import { checkToken } from '../middlewares/checkAuth.middlewares'

const router = Router()

router.get('/users', checkToken, getAllUser)
router.get('/user/:id', getUserId)
router.post('/user/new', createUser)

export default router