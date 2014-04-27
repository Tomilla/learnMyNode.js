var fs = require('fs');
fs.readFile(process.argv[2], function(err, data) {
    if (err)
        throw err;
    console.log(data.toString().split('\n').length - 1);
});

/*
 * Here's the official solution is if you want to compare notes:
 *────────────────────────────────────────────────────────────────────────────────

	var fs = require('fs');
	var file = process.argv[2];

	//fs.readFile(file, function (err, contents) {		//can also be used
	fs.readFile(file, 'utf8', function(callback, data) {
    	//var lines = contents.toString().split('\n').length - 1;	//can also be used
    	var lines = data.split('\n').length - 1;
    	console.log(lines);
	});

 *────────────────────────────────────────────────────────────────────────────────
**/
