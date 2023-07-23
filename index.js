const app = require('./app');
const http = require("http");

const myServer = http.createServer((req,res)=>{
    res.end("Server is running")
})
myServer.listen(5001, ()=>{
    console.log("Server run")
})



app.listen(5000, ()=>{
    console.log("Server is running")
})