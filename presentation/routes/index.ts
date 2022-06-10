import { Router } from 'express'
import { container } from 'tsyringe'
import UserRouter from './UserRouter'

const router = Router()
router.use('/customer', container.resolve(UserRouter).routes)
export default router
