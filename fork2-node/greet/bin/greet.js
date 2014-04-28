#!/usr/bin/env node
var greet = require('../index.js')
var argv = require('minimist')(process.argv.slice(2))

console.log(greet(argv._, argv.drunk))
