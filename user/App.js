const express = require("express");

const app = express();

app.get('/', (req, res) =>{
    res.send("<h1>hello world </h1>");
})

app.listen(4002, ()=>{
    console.log("server started on port 4002")
})