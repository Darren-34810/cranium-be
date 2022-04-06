const express = require("express");

const app = express();

app.get('/', (req, res) =>{
    res.send("<h1>hello world </h1>");
})

app.listen(4001, ()=>{
    console.log("server started on port 4001")
})