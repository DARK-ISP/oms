import express from "express";
import connectDb from "./dbConnect.js";

const app = express();

app.get("/",(req,res)=>{
    console.log("hello");
    res.send("hello")
})

connectDb()

const port = 9090;

app.listen(port,()=>{
    console.log(`srever is running on port ${port}`);
})


