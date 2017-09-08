var http = require('http');
var colors = require('colors');

function start() {
  function onRequest(request, response) {
    console.log("working");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("working");
    response.end();
  }

  http.createServer(onRequest).listen(9000);

  console.log("server has started ".green);
}

exports.start = start;
 
