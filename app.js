const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res, next)=>{
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    if(req.url==="/mark_levy"){
        fs.readFile("index.html", (err, page) => {
            res.statusCode = 200;
            if(err===null){                             // No Error
                res.end(page);
            }else{                                      // Some Error
                console.log(err);
                res.end("<h1>Page Not Found</h1>");
            }
        });
    }else{
        res.end("<h1>Page Not Found</h1>");
        
    }
});

server.listen(8080, (req, res) => {
    console.log("Server Started");
})