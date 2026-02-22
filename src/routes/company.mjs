import { CompanySchema } from "../mongoose/schema/CompanySchema.mjs";
import { Router } from "express";
import { asyncHandler } from "./errorHandler.mjs";

export const router = Router()

router.get("/api/company/get",asyncHandler(async(req,res)=>
{
const session = req.session.id
await CompanySchema.findOne({session})
.then((company)=>{return res.status(200)
    .json({
        status:true,
        data:company,
        err:null
    })})
    .catch((err)=>{
        return res
        .status(200)
        .json({
            status:false,
            message:"Please refresh the page and try again",
            err:err
        })
    })
}))