const fs = require('fs');

fs.stat('myText.txt', function(err, stats) {
    if (err) {
        return console.log(err);
    }
    console.log(stats);
})

fs.unlink('myText5.txt', function(err) {
    if (err) throw err;
    console.log('File Deleted!');
})