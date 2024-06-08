//this is the main root file for creating our node js server

//code use the http core module to create the server for request and response from the server
const http =require('http')

//createServer() is the method which will take a callback function which will start taking the request from the clients into server

const server=http.createServer((req,res)=>{

    console.log("server created and ready to listen the client request")
    console.log(req)
    console.log(req.url,req.method,req.headers) //important request fields from client when sent the request to server upon starting
     
//code below will to set the response on the browser sent to client

    res.setHeader('content-type','text/html')
    res.write('<html>');
    res.write('<head> <title> Node.js server </title> </head>');
    res.write('<body><h1> This is from node js server response </H1></body>')
    res.write('</html>');
    res.end() //end() will not allow any writings once called here.

    //exit from event loop we use process.exit()
    // process.exit() optional not to close untill response also reached to browser

})

//Listen() method is used to set up the port for server to launch and be in state of listening request from the clients
server.listen(3000)