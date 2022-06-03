import { Router } from 'express'
import customerRouter from './UserRouter'

const router = Router()
router.use('/customer')
export default router
