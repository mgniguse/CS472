var http = require('http');
var url = require('url');
var fs = require('fs');
var addmod = require('./addmod.js');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
//   console.log(q)
  var filename = "." + q.pathname;
  if (q.pathname=="/add.js")
    addmod.add(req,res,q.query)
  else 
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200);  // Content-Type not included
    res.write(data);
    return res.end();
  });
}).listen(8080, ()=>console.log("listening on 8080"));
