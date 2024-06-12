const express = require("express")

const app=express()

app.get("/",(req,res)=>{
    res.json("Hello from Docker")
})

app.listen(9000,()=>{console.log("Hello world")})