import { Router} from "express";
import { router as ErrHandler } from "./routes/errorHandler.mjs";
import {router as LoginRouter} from './routes/login.mjs'
import {router as ClientRouter} from './routes/clients.mjs'
import { router as CompanyRouter } from "./routes/company.mjs";

export const router = Router()

//Routes
router.use(ErrHandler)
router.use(LoginRouter)
router.use(ClientRouter)
router.use(CompanyRouter)