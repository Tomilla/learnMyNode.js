#!/usr/bin/env node
var greet = require('../index.js')
var parseArgs = require('minimist')
var temp = parseArgs(process.argv)
var name = ' '
if (process.argv[2])
	var name = process.argv[2]
console.log(temp._)
console.log(greet(name, temp.drunk ? temp.drunk : false))
