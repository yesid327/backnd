import { Router } from 'express'
import { signIn} from '../controllers/auth.controllers'

const router = Router()

router.post('/login', signIn)

export default router