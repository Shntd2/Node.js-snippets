const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('C:\\HTML\\navigation_page_test.html', function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

console.log('Server is running at http://localhost:8080/')