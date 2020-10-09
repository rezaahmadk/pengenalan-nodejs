const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/about', function (req, res, next) {
    console.log(req.query);
    res.send({success: true, keyword: req.query.keyword});
});

app.get('/txt-response', function (req, res, next) {
    res.send('Hello World!');
});

app.get('/product/:productId', function (req, res, next) {
    console.log(req.params);
    res.send({success: true, productId: req.params.productId});
});

app.get('/error', function (req, res, next) {
    next(new Error('Contoh Error'));
});

app.get('/multi-handler', function (req, res, next) {
    //Validasi Request
    if (req.query.keyword === 'satu'){
        return next();
    }

    return res.send('Keyword Harus Satu');
}, function (req, res, next) {
    //Handle Request
    res.send('Sukses');
});

app.get('/index', function (req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/pdf', function (req, res, next) {
    //Mengirim File
    res.sendFile(__dirname + '/tugas.pdf');

    //Mendownload File
    res.download(__dirname + '/tugas.pdf', 'Tugas.pdf');
});

app.get('/pelatihan', function (req, res, next) {
    res.render('index', {subBab: req.query.subBab});
})

app.use((err, req, res, next) => {
    console.error(err);
    res.send('Terjadi Error');
})
   
app.listen(8000, function() {
    console.log('Server Run On Port 8000');
});