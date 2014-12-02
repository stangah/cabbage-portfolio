var express = require('express');
var jf = require('jsonfile');
var nodemailer = require('nodemailer');
var app = express();

app.use(express.static(__dirname + '/azure'));

app.get('/', function(req, res){
  res.sendfile(__dirname + '/azure/index.html');
});

var config = jf.readFileSync('etc/config.json');

app.post('/contact', function(req, res) {
  var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: config.contactEmail
  });

  console.log(req);
});

var port = process.env.PORT || 9001;
app.listen(port);
