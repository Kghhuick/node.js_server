var fs = require('fs');


exports.upload = function(request, response) {
    console.log("starting upload");
    response.write("upload has started");
    response.end();
}

exports.welcome = function(request, response) {
    console.log("request has started.");
    fs.readFile('templates/start.html', function(err, html) {
        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        response.write(html);
        response.end();
    });
}

exports.error = function(request, response) {
    console.log("houston we have problem"); 
    response.write("404 :(");
    response.end();
}
