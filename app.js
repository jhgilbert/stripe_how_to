var express = require('express');
var app = express();

// Handlebars templating
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', 8080);
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('intro');
});

app.get('/node-setup', function(req, res) {
  res.render('node-setup');
});

app.get('/request-refund', function(req, res) {
  res.render('request-refund');
});

app.get('/main-layout', function(req, res) {
  res.render('main-layout');
});

app.get('/build-a-form', function(req, res) {
  res.render('build-a-form');
});

app.get('/test-data', function(req, res) {
  res.render('test-data');
});

app.get('/request-token', function(req, res) {
  res.render('request-token');
});

app.get('/create-charge', function(req, res) {
  res.render('create-charge');
});

app.get('/additional-challenges', function(req, res) {
  res.render('additional-challenges');
});

// Listen on designated port
app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl+C to terminate.');
});