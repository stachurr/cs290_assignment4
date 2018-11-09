/*
 * Write your server code in this file.  Don't forget to add your name and
 * @oregonstate.edu email address below.
 *
 * name:    Ryan Stachura
 * email:   stachurr@oregonstate.edu
 */

/*--------------------------------------------- Variable initialization*/
var http = require('http');
var fs = require('fs');
var server = http.createServer(requestHandler);
var page_index_html, page_index_js, page_404_html, page_style_css, image_benny = null;

/*--------------------------------------------- Read files and store*/
fs.readFile("./public/index.html", "utf-8", function(err, data) {
    if (err) { throw err; }
    page_index_html = data;
    console.log("[file successfully read: index.html]");
});

fs.readFile("./public/index.js", "utf-8", function(err, data) {
    if (err) { throw err; }
    page_index_js = data;
    console.log("[file successfully read: index.js]");
});

fs.readFile("./public/404.html", "utf-8", function(err, data) {
    if (err) { throw err; }
    page_404_html = data;
    console.log("[file successfully read: 404.html]");
});

fs.readFile("./public/style.css", "utf-8", function(err, data) {
    if (err) { throw err; }
    page_style_css = data;
    console.log("[file successfully read: style.css]");
});

fs.readFile("./public/benny.jpg", function(err, data) {
    if (err) { throw err; }
    image_benny = data;
    console.log("[file successfully read: benny.jpg]");
});

/*--------------------------------------------- Start server*/
server.listen(3000, function(err) {
    if (err) { throw err; }
    console.log("[Server is listening on port 3000]");
});

/*--------------------------------------------- Request handler*/
function requestHandler(req, res) {
    console.log("[Request received]");

    switch(req.url) {
        case "/":
        case "/index.html":
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(page_index_html);
            break;

        case "/style.css":
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(page_style_css);
            break;

        case "/index.js":
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(page_index_js);
            break;

        case "/benny.jpg":
            res.writeHead(200, {'Content-Type': 'image/jpg'});
            res.write(image_benny);
            break;

        default:
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write(page_404_html);
    }

    res.end();
}
