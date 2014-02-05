var home = function(request, response) {
    response.setHeader('Content-Type', 'text/html');
    response.send(
        '<html>' +
        '<a id="repository-link" href="https://github.com/cletourneau/yose-node">Hello Yose</a>' +
        '<br/>' +
        '<a id="contact-me-link" href="/about">About Us</a>' +
        '<br/>' +
        '<a id="ping-challenge-link" href="/ping">Ping!</a>' +
        '</html>');
};

module.exports = home;