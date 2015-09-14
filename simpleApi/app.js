var express = require('express');
var app = express();

// enable CORS
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/json/', function (req, res) {
  res.json({users: [
    {
      username: "Jim",
      email: "jim@example.org"
    },
    {
      username: "Mary",
      email: "mary@example.org"
    },
    {
      username: "Al",
      email: "al@example.org"
    }
  ]});
})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});