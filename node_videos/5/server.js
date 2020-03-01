const http = require("http");

http.createServer((req, res) => {

    res.writeHead(200, {"Content-type": "text/html"} )

    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Hello World</title>
        </head>
        <body>
            <h1>Hello World</h1>
            <p>method: ${req.method}</p>
            <p>url: ${req.url}</p>
        </body>
        </html>
    `);

}).listen(3000);

console.log("Web server listning on port 3000");
