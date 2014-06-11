var argvArr = [].slice.call(process.argv, 2)
  , concatStream = require('concat-stream')
  , http = require('http')
  , results = []
  , counter = 0
  , idx = 0;

var THREE_URLS = 3;

for ( ; idx < THREE_URLS; idx++) {
  myHttpGet(idx);
}

function myHttpGet(index) {
  http.get(argvArr[index], function (response) {
    response.pipe(concatStream(function (chunk) {

      results[index] = chunk + '';
      counter++;

      if (counter == THREE_URLS) {
        results.forEach(function (stream) {
          console.log(stream);
        });
      }
    }));
  });
}

/**
 * Here's the official solution is if you want to compare notes:
 * ─────────────────────────────────────────────────────────────────────

    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0

    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(data)

          results[index] = data.toString()
          count++

          if (count == 3) // yay! we are the last one!
            printResults()
        }))
      })
    }

    for (var i = 0; i < 3; i++)
      httpGet(i)

 * ─────────────────────────────────────────────────────────────────────
 *
**/
