import http from "http"

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("Hello")
    }
    else if(req.url == "/home"){
        res.end("Hi Home")
    }
})
server.listen(3000,()=>{
    console.log("Server running on port 3000");
})