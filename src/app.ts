import express, { Express,Request,Response,NextFunction } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./utils/middleWare/errorHandler";
import { ApiError } from "./utils/apiHandler/apiError";
import { ApiResponse } from "./utils/apiHandler/apiResponse";

/**imported router*/
import healthCheckRouter from './apps/helathCheck/healthCheck.routes'

export const expressApp = async (app: any) => {
    app.use(helmet())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(cors())
    app.use(cookieParser())

    /**router */
    app.use('/api/v1/health-check',healthCheckRouter)


    /**handle api not found */
    app.use((req:Request,res:Response,next:NextFunction)=>{
        next(new ApiError(404, 'Api Not found',''));
     })
     /**handle global middleware */
    app.use(errorHandler)
}
