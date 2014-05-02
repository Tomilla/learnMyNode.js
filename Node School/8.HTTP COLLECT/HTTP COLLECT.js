var http = require('http');
var stream = '';

http.get(process.argv[2], function(response){
    response.on('data', function(chunk) {
        stream += chunk;
    });
    response.on('end',function(){
        console.log(stream.length);
        console.log(stream);
    });
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


