const fs=require('fs') //filesystem module to deal with file handling operations

const requestHandler = (req,res)=>{

    // console.log("server created and ready to listen the client request")
    // console.log(req)
    // console.log(req.url,req.method,req.headers) //important request fields from client when sent the request to server upon starting
     
//this is code is to understanding routing in node js
        const url =req.url

        if (url==="/"){
            
            res.write("<html>")
            res.write("<head><title> Routing Learning </title> </head>")
            res.write('<body><form action="/message" method="POST"><input type="text" placeholder="type message" name="message"><button type="submit">send</button></form></body>')
            res.write("</html>")
            return res.end()
        }

//below code is for redirecting the pages using node js

if (url === "/message" && req.method==="POST"){

    const body=[]; //body variable to store all the chunks from the requests

    req.on('data',(chunck)=>{
        body.push(chunck); //all chunks data is being collected in body
        console.log(chunck);
    })

    //below code is for making a buffer using all chunks so later we can use the data into display in routes

    req.on('end',()=>{
        const parseBody=Buffer.concat(body).toString(); //create a buffer of chunks which are converted into string to be uses later and store in parsed data
        console.log(parseBody)
        const data=parseBody.split("=")[1];
        fs.writeFileSync("Message.txt",data) //parsed data is split by = then 2nd element after split is being sent to routing to display on screen
    })

    res.statusCode=302 //redirection code to set status for network
    res.setHeader("Location","/") //set location of redirection
    return res.end()
}

//code below will to set the response on the browser sent to client

    res.setHeader('content-type','text/html')
    res.write('<html>');
    res.write('<head> <title> Node.js server </title> </head>');
    res.write('<body><h1> This is from node js server response </H1></body>')
    res.write('</html>');
    res.end() //end() will not allow any writings once called here.

    //exit from event loop we use process.exit()
    // process.exit() optional not to close untill response also reached to browser

}

module.exports={requestHandler}