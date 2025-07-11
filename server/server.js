import express from "express"
import "dotenv/config";
import  cors from "cors";
import {clerkMiddleware} from '@clerk/express'

import clerkWebhooks from "./controller/clerkWebhooks.js";
import conectDB from "./configs/db.js";


conectDB()

const app = express()
app.use(cors()) // Enable crossorigin resource SHARING

//ทmiddle เเวร์
app.use(express.json())
app.use(clerkMiddleware())
///API to listen
app.use("/api/clerk" , clerkWebhooks);

app.get('/',(req,res)=>res.send("Api is working "))

const PORT = process.env.PORT || 3000;

app.listen(PORT ,()=>console.log(`server running on port ${PORT}`));