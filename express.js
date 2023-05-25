const express = require('express')

const app = express();

app.get('/', function(req, res) {
    res.send('Hello world')
})

app.get('/brian', function(req, res){
    res.send('Get well soon Brian')
})

app.listen(9000,  function (req, res) {
    console.log('Running...')
});