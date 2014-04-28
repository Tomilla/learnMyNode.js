#!/usr/bin/env node
var greet = require('./extra.js')
var parseArgs = require('minimist')
var name = process.argv[2]

if (process.argv[3] != null)
    var drunk = parseArgs(process.argv[3].replace('-',''))

console.log(greet(name, drunk))
