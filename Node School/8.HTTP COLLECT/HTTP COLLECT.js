var http = require('http');
var concatStream = require('concat-stream');

http.get(process.argv[2], function(response){
    response.pipe(concatStream(function(chunk) {
        chunk = chunk.toString();
        console.log(chunk.length);
        console.log(chunk);
    }));
});

/*
 *Here's the official solution is if you want to compare notes:
 *────────────────────────────────────────────────────────────────────────────────

    var http = require('http')
    var bl = require('bl')

    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })

 *────────────────────────────────────────────────────────────────────────────────
**/
