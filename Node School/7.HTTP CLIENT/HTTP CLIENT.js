var http = require('http');
http.get(process.argv[2], function(response) {
    response.on('data', function (data) {
        console.log(data.toString());
    }).on('error', function (event){
        console.log("ERROR: " + event.toString());
    });
});

/*
 * Here's the official solution is if you want to compare notes:
 *────────────────────────────────────────────────────────────────────────────────

    var http = require('http')

        http.get(process.argv[2], function (response) {
        response.setEncoding('utf8')
        response.on('data', console.log)
        response.on('error', console.error)
    })

 *────────────────────────────────────────────────────────────────────────────────
**/

