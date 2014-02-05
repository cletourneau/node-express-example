var request = require('request');
var http    = require('http');
var server  = require('../../libs/server');
var cheerio = require('cheerio');

describe('Home page:', function() {

    var testServer;
    
    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close(); 
    });
   
    it('contains the text Hello Yose', function(done) {
        request('http://localhost:7000/', function(error, response, body) {
            expect(body).toContain('Hello Yose');
            done(); 
        });
    });

    it('contains the repository link', function(done) {
        request('http://localhost:7000/', function(error, response, body) {
            var $ = cheerio.load(body);
            expect($('a#repository-link').length).toBe(1);
            expect($('a#repository-link').attr('href')).toEqual('https://github.com/cletourneau/yose-node');
            done();
        });
    });

    it('links to a webpage with an element containing the name of the game', function(done) {
        request('http://localhost:7000/', function(error, response, body) {
            var $ = cheerio.load(body);
            // expect().toEqual('https://github.com/cletourneau/yose-node');
            var link = $('a#repository-link').attr('href');

            request(link, function(error, response, body) {
                var $ = cheerio.load(body);
                expect($('#readme').text()).toContain('YoseTheGame');
                done();
            });

        });
    });
});