import { Router} from "express";
import {router as LoginRouter} from './routes/login.mjs'
import {router as ClientRouter} from './routes/clients.mjs'
export const router = Router()
router.use(LoginRouter)
router.use(ClientRouter)