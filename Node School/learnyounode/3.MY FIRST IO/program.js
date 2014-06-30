var fs = require('fs')
var filename = process.argv[2]
//lines = fs.readFileSync(filename, 'utf8').split('\n').length - 1;		//can also be used
file = fs.readFileSync(filename)
contents = file.toString()
console.log(contents.split('\n').length - 1)
console.log(lines)

/*
 * Here's the official solution is if you want to compare notes:
 *────────────────────────────────────────────────────────────────────────────────

	var fs = require('fs')

	var contents = fs.readFileSync(process.argv[2])
	var lines = contents.toString().split('\n').length -1
	console.log(lines)

	//node fou can avoid the .toString() by passing 'utf8' as
	//the second argument to readFileSync, then you will get a String!

	fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

 *────────────────────────────────────────────────────────────────────────────────
 */
