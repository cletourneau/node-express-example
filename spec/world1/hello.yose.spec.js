var request = require('request');
var http    = require('http');
var server  = require('../../libs/server');
var cheerio = require('cheerio');

describe('World1 - Hello Yose:', function() {

    var testServer;
    
    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close(); 
    });
   
    it('contains the repository link', function(done) {
        request('http://localhost:7000/', function(error, response, body) {
            expect(body).toContain('Hello Yose');
            done(); 
        });
    });
});