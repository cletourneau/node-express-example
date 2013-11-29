var request = require('request');
var http    = require('http');
var server  = require('../libs/server');
var cheerio = require('cheerio');

describe('Passing the share level:', function() {

    var testServer;
    
    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close(); 
    });
   
    it('contains the repository link', function(done) {
        request('http://localhost:7000/', function(error, response, body) {
            var $ = cheerio.load(body);
            expect($('a#repository-link').length).toBe(1);
            done(); 
        });
    });
});