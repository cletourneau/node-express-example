var express = require('express');

var server = express();

server.get('/ping', function(request, response){
    require('./world1/ping.endpoint.js')(request, response);
});

server.get('/', function(request, response){
    require('./world1/home.page.js')(request, response);
});

module.exports = server;
