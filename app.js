var n = 0;
var http = require('http');
http.createServer(function (req, res) {
  if (++n > 4){ a }
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');
