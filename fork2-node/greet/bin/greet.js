#!/usr/bin/env node
var greet = require('../index.js')
var parseArgs = require('minimist')
var name = process.argv[2]

if (process.argv[3] != null)
    var drunk = parseArgs(process.argv[3])

console.log(greet(name, drunk))
