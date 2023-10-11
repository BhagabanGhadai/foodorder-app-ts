import { Request,Response,NextFunction } from "express";

export const asyncHandler=async (requestController:any)=>{
    return async (req:Request,res:Response,next:NextFunction)=>{
        try {
            await requestController(req,res,next)
        } catch (error) {
            next(error)
        }
    }
}