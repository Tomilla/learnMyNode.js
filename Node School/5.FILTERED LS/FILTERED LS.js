var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, files) {
    for (var idx = 0; idx < files.length; idx++) {    //alias 'idx' as index
        var filter = "." + process.argv[3]
        if (path.extname(files[idx]) == filter)
            console.log(files[idx])
    }
})

/*
 * Here's the official solution is if you want to compare notes:
 *────────────────────────────────────────────────────────────────────────────────

    var fs = require('fs')
    var path = require('path')

    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })

 *────────────────────────────────────────────────────────────────────────────────
 */
