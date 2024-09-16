// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.
// The comments.html file should be in the same directory as the comments.js file.

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('comments.html', function(err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
}).listen(3000);