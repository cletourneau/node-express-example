var share = function(request, response) {
    response.setHeader('Content-Type', 'text/html');
    response.send('<html><a id="repository-link"></a></html>');
};

module.exports = share;