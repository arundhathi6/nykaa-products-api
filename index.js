const express = require("express");
const app = express();
const data = require("./data.json");
let port = process.env.PORT || 5234
app.get("/",(req,res)=>{
    res.send("Hello")
    
})
app.get("/products",(req,res)=>{
    res.send(data)
    
})
app.listen(port,()=>{
    console.log(`listening..port http://localhost:${port}`)
})
