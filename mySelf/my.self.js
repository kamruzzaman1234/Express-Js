const express = require("express");
const selfR = express.Router();

selfR.get("/k-id", (req,res)=>{
    res.send("<h2> Kamrul Is is = 221-15-5629 </h2>")
})
selfR.get("/k-home", (req,res)=>{
    res.send(" <h2> Kamrul Home town is Rangpur </h2>")
})
selfR.get("/k-ditric", (req,res)=>{
    res.send(" <h2> Kamrul Distric is Rangpur </h2>")
})

module.exports = selfR;
