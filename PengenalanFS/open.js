const fs = require('fs');

fs.open('myText.txt', 'w', function(err, file) {
    if (err) {
        return console.error(err);
    }

    console.log('Saved!');
})