var express = require('express');

var server = express();

server.get('/ping', function(request, response){
    require('./world1/ping.endpoint.js')(request, response);
});

server.get('/', function(request, response){
    require('./world1/hello.yose.endpoint.js')(request, response);
});

module.exports = server;
