import { asyncHandler } from "../../../utils/apiHandler/asyncHandler";
import { ApiResponse } from "../../../utils/apiHandler/apiResponse";
import { Request,Response } from "express";

export  const healthCheck=asyncHandler((req:Request,res:Response)=>{
    res.send(new ApiResponse(200,null,'Health Check SuccessFul',true))
})