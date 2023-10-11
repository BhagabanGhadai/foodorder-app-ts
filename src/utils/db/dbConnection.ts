import env from '../../env';
import mongoose from 'mongoose';

export const connectMongoDb=async()=>{
    mongoose.connect(env.mongo.MONGODB_URI).then((connectionInstance)=>{
        console.log(
            `☘️  MongoDB Connected! Db host: ${connectionInstance.connection.host}`
          );
    }).catch((error)=>{
        console.log(error)
        process.exit(1)
    })
}