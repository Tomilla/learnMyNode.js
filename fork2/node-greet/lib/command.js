// Generated by CoffeeScript 1.7.1
(function() {
  var command;

  command = function() {
    var greet, parsedArgv;
    greet = require('./index');
    parsedArgv = require('minimist')(process.argv.slice(2));
    console.log(process.argv);
    console.log(parsedArgv);
    return console.log(greet(parsedArgv._, parsedArgv.drunk));
  };

  module.exports = command;

}).call(this);
