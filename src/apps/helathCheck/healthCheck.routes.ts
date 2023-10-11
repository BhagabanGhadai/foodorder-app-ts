import express,{Router} from 'express'
const router:Router=express.Router()
import {healthCheck} from './controllers/healthCheck.controller'

router.route('/').get(healthCheck)

export default router