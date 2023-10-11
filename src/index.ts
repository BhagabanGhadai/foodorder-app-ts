import express, { Express } from "express";
import { expressApp } from "./app";
import env from './env';
import {connectMongoDb} from './utils/db/dbConnection'

const startServer = async () => {
    const app: Express = express()
    await expressApp(app)
    await connectMongoDb()
    app.listen(env.PORT, () => {
        console.log("⚙️  Server is running on port: " + env.PORT);
    }).on('error', (error) => {
        console.log(error)
        process.exit(1)
    })
}
startServer()