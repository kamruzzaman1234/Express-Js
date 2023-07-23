const express = require("express");
const app = express();
const route = require("./user-router/user.route");
const myAddress = require("./mySelf/my.self");


app.use(myAddress);
app.use(route)
app.use("/", (req,res)=>{
    res.send("<h2>Home Router is Running</h2>")
})
app.use((req,res)=>{
    res.send("<h1>404 route is not found</h1>")
})

module.exports = app