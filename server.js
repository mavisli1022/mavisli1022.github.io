var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static(__dirname + '/assets'));


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.get('/', function(req, res){
    res.sendfile("./assets/views/index.html");
})

app.get('/tech', function(req, res){
    res.sendfile("./assets/views/tech.html");
})

app.get('/life', function(req, res){
    res.sendfile("./assets/views/life.html");
})

app.get('/about', function(req, res){
    res.sendfile("./assets/views/about.html");
})

app.listen(process.env.PORT || 3000);
