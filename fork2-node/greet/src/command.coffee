command = ->
	greet =
		require('./index')
	parsedArgv =
		require('minimist')(process.argv.slice(2))
	console.log(greet(parsedArgv._, parsedArgv.drunk))

module.exports = command
