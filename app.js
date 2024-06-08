//this is the main root file for creating our node js server

//code use the http core module to create the server for request and response from the server
const http =require('http')

//createServer() is the method which will take a callback function which will start taking the request from the clients into server

const server=http.createServer((req,res)=>{

    console.log("server created and ready to listen the client request")
    console.log(req)
})

//Listen() method is used to set up the port for server to launch and be in state of listening request from the clients
server.listen(3000)