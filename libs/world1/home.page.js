var home = function(request, response) {
    response.setHeader('Content-Type', 'text/html');
    response.send('<html><a id="repository-link" href="https://github.com/cletourneau/yose-node">Hello Yose</a></html>');
};

module.exports = home;