import dotenv from 'dotenv'
dotenv.config({path:'./.env'})

export default {
    PORT:process.env.PORT,
    NODE_ENV:process.env.NODE_ENV,
    mongo:{
        MONGODB_URI:"mongodb://myusername:mypassword@127.0.0.1:27017/foodorderapp?authsource=admin"
    }
}