import express,{Application,Request,Response} from 'express'
const app:Application = express()
const PORT:number = 4000;
import * as dotenv from 'dotenv'
import userRoute from './routes/user.route'
dotenv.config()
import './database.ts/connection'
app.use(express.json())
app.get("/", (req:Request, res:Response)=>{
    res.send("hello")
})

//localhost:3000/register
//localhost:3000/hello/register
app.use("", userRoute)
app.listen(PORT, ()=>{
    console.log("server is listeing on port 4000");
    
})