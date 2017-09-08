var http = require('http');
var colors = require('colors');
var handlers = require('./handlers');

function start() {
  function onRequest(request, response) {
    console.log("received a request.".green);
    console.log("reaquest" + request.url + " received.");

    response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});

    switch (request.url) {
        case '/':
        case '/start':
            handlers.welcome(request, response);
            break;
        case '/upload':
            handlers.upload(request, response);
            break;
        default:
            handlers.error(request, response);
    }
  }

  http.createServer(onRequest).listen(9000);

  console.log("server has started".green);
}

exports.start = start;
