//this is the main root file for creating our node js server
const http =require('http')

const server=http.createServer((req,res)=>{

    console.log("server created and ready to listen the client request")
    console.log(req)
})

server.listen(3000)