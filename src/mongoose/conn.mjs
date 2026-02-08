import {mongoose} from 'mongoose'
import dotenv from "dotenv";
dotenv.config({ quiet: true});

export const DbConnection = ()=>
{
 
    mongoose.connect(process.env.MONGO_DB_URI)
    .then(console.log('Mongo DB connection Successfull'))
    .catch((err)=>
        {
            console.log(err)
            Exit(1)
})
    }
