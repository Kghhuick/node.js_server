exports.upload = function(request, response) {
    console.log("starting upload");
    response.write("upload has started");
    response.end();
}

exports.welcome = function(request, response) {
    console.log("starting welcome.");
    response.write("Welcome!");
    response.end();
}

exports.error = function(request, response) {
    console.log("houston we have problem");
    response.write("404 :(");
    response.end();
}
