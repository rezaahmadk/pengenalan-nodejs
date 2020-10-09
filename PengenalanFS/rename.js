const fs = require('fs');

fs.rename('myText.txt', 'myText5.txt', function(err) {
    if (err) throw err;
    console.log('File Renamed!');
})