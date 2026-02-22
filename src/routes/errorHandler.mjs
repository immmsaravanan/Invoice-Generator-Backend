import { Router } from "express";

export const router = Router()

router.use((err,req,res,next)=>
{
    console.log(err)
    return res.status(400).json({status:false,message:"Some error has been occurred ",err:err})
})

export const asyncHandler = (fn)=>(req,res,next)=>{
    Promise.resolve(fn(req,res,next)).catch(next)
}