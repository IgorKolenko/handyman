var express = require('express');
var app = express();
app.use(express.static('public'))

app.get('/', function (req, res){
    res.sendFile(__dirname+'/public/index.html');
});

app.get('/contact', function (req, res){
    res.sendFile(__dirname+'/public/contact.html');
});

app.get('/projects', function (req, res){
    res.sendFile(__dirname+'/public/projects.html');
});

app.get('/services', function (req, res){
    res.sendFile(__dirname+'/public/services.html');
});

app.listen(8080);