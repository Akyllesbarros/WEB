const express = require('express');
const app = express();


app.get('/', function(req, res){
    res.send('Tem um texto bonito e intrigante aqui!');
})

app.get('/blue', function(req, res){
    res.send('<h1>Outro texto melhor que aquele!</h1>');
})
app.listen(3002)