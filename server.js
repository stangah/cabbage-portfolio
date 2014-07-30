var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

var port = process.env.PORT || 9001;
app.listen(port);
