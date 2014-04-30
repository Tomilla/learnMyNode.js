function command(){
	var greet = require('./index.coffee')
	var parsedArgv = require('minimist')(process.argv.slice(2))

	console.log(greet(parsedArgv._, parsedArgv.drunk))
}
module.exports = command
