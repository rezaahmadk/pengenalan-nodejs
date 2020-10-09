const http = require('http');
const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    switch(req.url){
        case '/about':
            res.write('Halaman About');
            break
        case '/produk':
            res.write('Halaman Produk');
            break
        case '/profile':
            res.write('Halaman Profil');
            break
        default:
            res.write('404 Halaman Tidak Ditemukan');
    }
    res.end();
})

server.listen(8000);
console.log("server running on http://localhost:8000");