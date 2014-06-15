var portNum = +process.argv[2]
  , http = require('http')
  , url = require('url');

var server = http.createServer(function (req, res) {
  var result
    , parsedUrl = url.parse(req.url, true)
    , nowTime = new Date(parsedUrl.query.iso)

  if ((req.url + '').indexOf('/api/parsetime') != -1)
    result = {
      hour:   nowTime.getHours(),
      minute: nowTime.getMinutes(),
      second: nowTime.getSeconds()
    };

  if ((req.url + '').match(/^\/api\/unixtime/) != null)
    result = {
      unixtime: nowTime.getTime()
    };

  if (result != null) {
    res.StatusCode = 200;
    res.setHeader = ('Content-Type', 'application/json');
    res.end(JSON.stringify(result));
  } else {
    res.StatusCode = 404;
    res.end();
  }
});

server.listen(portNum);

/**
 * Here's the official solution is if you want to compare notes:
 * ─────────────────────────────────────────────────────────────────────
  var http = require('http')
  var url = require('url')

  function parsetime (time) {
    return {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    }
  }

  function unixtime (time) {
    return { unixtime : time.getTime() }
  }

  var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true)
    var time = new Date(parsedUrl.query.iso)
    var result

    if (/^\/api\/parsetime/.test(req.url))
      result = parsetime(time)
    else if (/^\/api\/unixtime/.test(req.url))
      result = unixtime(time)

    if (result) {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(result))
    } else {
      res.writeHead(404)
      res.end()
    }
  })
  server.listen(Number(process.argv[2]))

 * ─────────────────────────────────────────────────────────────────────
 * You've finished all the challenges! Hooray!
**/
