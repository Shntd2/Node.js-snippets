const http = require('http');
const date = require('./date_module_test');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('Current date and time ' + date.myDateTime());
    res.end();
}).listen(8080);
