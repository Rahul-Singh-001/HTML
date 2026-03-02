const http=require("http")
const url=require("url")
const querystring=require("querystring");
const server=http.createServer((req,res)=>{
    if(req.method==="POST" && req.url==="/submit"){
        let body="";
        req.on("data",(chunk)=>{
            body+=chunk;
        })
        req.on("end",()=>{
            const parseData=querystring.parse(body)
            console.log(parseData);
            res.end("Data received");
        })
    }
      else if(req.method==="GET") {
            const parsedurl=url.parse(req.url,true);
            if(parsedurl.pathname==="/search"){
                 const username=parsedurl.query.username
                 const password=parsedurl.query.password
                 res.writeHead(200,{"content-type":"text/html"})
                 res.end(`<h2>hello ${username} your password is${password}`)
            }
            else{
                res.end("wrong request")
            }
            
        }

})


server.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});