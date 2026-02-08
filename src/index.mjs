import express from 'express';
import cors from 'cors'
import { router } from './router.mjs';
import { DbConnection } from './mongoose/conn.mjs';
import session from 'express-session';

DbConnection()
const App = express()
App.listen(3000,'localhost',()=>console.log("started server at port 3000"))
App.use(express.json())
App.use(cors({
    origin:"http://localhost:5173",
    method:['GET','POST','PUT','DELETE'],
    credentials:true
}))
App.use(session({
    saveUninitialized:false,
    secret:"aqwfoawefaweopfaewophfpjh",
    resave:false,
    cookie:{
        maxAge:60000*60,
        httpOnly:true,
        sameSite:"lax",
        secure:process.env.NODE_ENV === "prod"
    }
}))

App.use(router)

