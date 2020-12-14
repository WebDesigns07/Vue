var http = require('http');

console.log("Hello World!");
http.createServer(function(_req, rsp) {
    rsp.writeHead(200, "OK", {"Content-Type": "text/plain", "xxxs": "sd", "1": "1", "Access-Control-Allow-Origin": "http://127.0.0.1:5501"});
    // rsp.writeHead("Content-Type", "text/plain");
    // rsp.writeHead("Access-Control-Allow-Origin", )
    rsp.end("Hello World!");
}).listen(15000);