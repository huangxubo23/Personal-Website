var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var swig = require('swig'); 

var app = express();

app.set('port', process.env.PORT || 3001);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)));

app.get('/', function(req, res) {
    res.render('index.html');
});

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});