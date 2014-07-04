var fs = require('fs')
  , path = process.argv[2];
fs.createReadStream(path).pipe(process.stdout);
