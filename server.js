var express = require('express');
var _ = require('lodash');
var app = express();
var bodyParser = require('body-parser')
var jf = require('jsonfile');
var config = jf.readFileSync('azure/config.json');

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: config.contactEmail
});

app.use(express.static(__dirname + '/azure'));

app.get('/', function(req, res){
  res.sendfile(__dirname + '/azure/index.html');
});

app.post('/contact', bodyParser.json(), function(req, res) {
  var body = req.body;
  var mailOptions = _.cloneDeep(config.mailOptions);
  mailOptions.text = '\nName: '+body.name+'\nEmail: '+body.email+'\nText: '+body.msg;
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
    }else{
      console.log('Message sent: ' + info.response);
    }
  });
});

var port = process.env.PORT || 9001;
app.listen(port);
