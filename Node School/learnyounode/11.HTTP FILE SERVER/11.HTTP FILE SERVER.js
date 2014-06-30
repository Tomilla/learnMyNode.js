var fs = require('fs')
  , http = require('http')
  , portNum = process.argv[2] // Port Number
  , serveLoc = process.argv[3] // Serve Location
  , option = {encoding: 'utf8'};

var server = http.createServer(function (req, res){
  res.statusCode = 200;
  fs.createReadStream(serveLoc, option).pipe(res);
})

server.listen(portNum);

/**
 * Here's the official solution is if you want to compare notes:
 * ─────────────────────────────────────────────────────────────────────
    var http = require('http')
    var fs = require('fs')

    var server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })

      fs.createReadStream(process.argv[3]).pipe(res)
    })

    server.listen(Number(process.argv[2]))

  * ────────────────────────────────────────────────────────────────────
  * You have 2 challenges left.
 **/
