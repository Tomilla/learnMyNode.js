var map = require('through2-map')
  , portNum = process.argv[2] // Port Number
  , http = require('http');

var server = http.createServer(function (req, res) {
  if (req.method == "POST") {
    req.pipe(map(function (chunk) {
      return (chunk + '').toUpperCase();
    })).pipe(res);
  } else {
    return "ERROR: The request method should be `POST`";
  }
});
server.listen(portNum);

/**
 * Here's the official solution is if you want to compare notes:
 * ─────────────────────────────────────────────────────────────────────

  var http = require('http')
  var map = require('through2-map')

  var server = http.createServer(function (req, res) {
    if (req.method != 'POST')
      return res.end('send me a POST\n')

    req.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase()
    })).pipe(res)
  })

  server.listen(Number(process.argv[2]))

 * ─────────────────────────────────────────────────────────────────────
 * You have 1 challenge left.
**/
