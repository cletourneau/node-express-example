var helloYose = function(request, response) {
    response.setHeader('Content-Type', 'text/html');
    response.send('<html>Hello Yose</html>');
};

module.exports = helloYose;