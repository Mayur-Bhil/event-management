import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv"

dotenv.config();


const app = express();


app.use(cors({
    origin:process.env.DB_URI,
    credentials:true
}))

app.use(express.json());
app.use(cookieParser());
app.use(morgan());
app.use(helmet({
    crossOriginResourcePolicy:false
}));



const port = 800 || process.env.PORT;

app.get("/",(req,res)=>{
 return res.json({
    message : "Hi there server is avtive"
 })
})