// where your node app starts
// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204
app.use(express.static('public'));

// http://expressjs.com/en/starter/static-files.html
app.get('/', function(req, res) {
  res.sendfile(__dirname + '/views/index.html');
});

// your first API endpoint.
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

// your second API endpoint for /api/whoami
app.get('/api/whoami', function(req, res) {
  // Get the client's IP address, language, and software from request headers
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const language = req.headers['accept-language'].split(',')[0];
  const software = req.headers['user-agent'];

  // Send the response as JSON
  res.json({
    ipaddress: ip,
    language: language,
    software: software
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
