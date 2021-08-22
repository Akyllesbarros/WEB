const http = require('http');


http.createServer(function(req, res) {
    res.end('<h1>Ola servidor</h1>');
}).listen(3001);

console.log('Meu servidor está rodando');