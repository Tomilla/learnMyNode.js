command = ->
	greet =
		require('./index')
	parsedArgv =
		require('minimist')(process.argv.slice(2))
	console.log(process.argv)
	console.log(parsedArgv)
	console.log(greet(parsedArgv._, parsedArgv.drunk))

module.exports = command
