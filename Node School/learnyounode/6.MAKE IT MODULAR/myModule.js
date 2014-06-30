var fs = require('fs')
var path = require('path')
var idx = 0
var fileList = new Array()

module.exports = function(dirname, filter, callback) {
    fs.readdir(dirname, function(err, files) {
        if (err)
            return callback(err)
        else
            files.forEach(function (file) {
            if (path.extname(file) === '.' + filter) {
                fileList[idx] = file
                    idx++
            }
        })
    callback(null, fileList)
    })
}
