var portNum = process.argv[2]
  , net = require('net')
  , data = getNow();

var server = net.createServer(function (socket) {
  socket.write(data)
  socket.end();
})
server.listen(portNum);

function getNow() {
  var date = new Date();
  var YY = date.getFullYear()
    , MM = dateCompletion(date.getMonth() + 1)
    , DD = dateCompletion(date.getDate())
    , hh = dateCompletion(date.getHours())
    , mm = dateCompletion(date.getMinutes());

  return YY + '-' + MM + '-' + DD + ' ' + hh + ':' + mm + '\n';
}

function dateCompletion(dateNum) {
  return dateNum < 10 ? '0' + dateNum : dateNum;
}

/**
 * Here's the official solution is if you want to compare notes:
 * ─────────────────────────────────────────────────────────────────────

  var net = require('net')

  function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
  }

  function now () {
    var d = new Date()
    return d.getFullYear() + '-'
      + zeroFill(d.getMonth() + 1) + '-'
      + zeroFill(d.getDate()) + ' '
      + zeroFill(d.getHours()) + ':'
      + zeroFill(d.getMinutes())
  }

  var server = net.createServer(function (socket) {
    socket.end(now() + '\n')
  })

  server.listen(Number(process.argv[2]))

 * ─────────────────────────────────────────────────────────────────────
 * You have 3 challenges left. :)
**/
