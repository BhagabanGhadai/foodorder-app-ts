import { ApiError } from "../apiHandler/apiError";
import { Request, Response, NextFunction } from 'express';
import env from '../../env'
import mongoose from 'mongoose';

export const errorHandler=(err:any,req:Request,res:Response,next:NextFunction)=>{
    if(!(err instanceof ApiError)){
        const statusCode=err.statusCode|| err instanceof mongoose.Error ? 400 : 500;
        const message:string=err.message||"something went wrong"
        err = new ApiError(statusCode, message, err.stack);
    }
    const response = {
        ...err,
        message: err.message,
        ...(env.NODE_ENV === "development" ? { stack: err.stack } : {}),
      };
      res.status(err.statusCode).send(response);
}