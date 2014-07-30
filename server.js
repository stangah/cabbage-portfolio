var express = require('express');
var app = express();

app.use(express.static(__dirname + '/azure'));

app.get('/', function(req, res){
  res.sendfile(__dirname + '/azure/index.html');
});

var port = process.env.PORT || 9001;
app.listen(port);
