var express = require('express');

var server = express();

server.get('/ping', function(request, response){
    require('./challenge.ping/ping.endpoint')(request, response);
});

server.get('/', function(request, response){
    require('./challenge.share/share.endpoint')(request, response);
});

module.exports = server;
