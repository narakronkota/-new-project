import express from "express"
import "dotenv/config";
import  cors from "cors";
import {clerkMiddleware} from '@clerk/express'
import conectDB from "./configs/db.js";
import clerkWebhooks from "./controller/clerkWebhooks.js";


conectDB()

const app = express()
app.use(cors()) // Enable crossorigin resource SHARING

//ทmiddle เเวร์
app.use(express.json())
app.use(clerkMiddleware())
///API to listen
app.use("/api/clerk" ,clerkWebhooks)

app.get('/',(req,res)=>res.send("Api is working fine"))

const PORT = process.env.PORT || 5000;

app.listen(PORT ,()=>console.log(`server running on port ${PORT}`));