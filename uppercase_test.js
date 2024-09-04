const http = require('http');
const uppercaseText = require('upper-case');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uppercaseText.upperCase('Hello'));
    res.end();
}).listen(8080)
