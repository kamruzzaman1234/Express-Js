const express = require("express");
const userRoute = express.Router();

userRoute.get("/id", (req,res)=>{
    res.send(" <h2> Id Router Is Start </h2>")
})
userRoute.get("/login", (req,res)=>{
    res.send(" <h2> Log In Router is Running </h2>")
})

module.exports = userRoute;
