var fs = require('fs'); 
var https = require('https'); 

var options = { 
    key: fs.readFileSync('pem/server-key.pem'), 
    cert: fs.readFileSync('pem/server-crt.pem'), 
    ca: fs.readFileSync('pem/ca-crt.pem'), 
    crl: fs.readFileSync('pem/ca-crl.pem'), 
    requestCert: true, 
    rejectUnauthorized: true 
}; 

https.createServer(options, function (req, res) { 
    console.log(new Date()+' '+ 
        req.connection.remoteAddress+' '+ 
        req.socket.getPeerCertificate().subject.CN+' '+ 
        req.method+' '+req.url); 
    res.writeHead(200); 
    res.end("hello world\n"); 
}).listen(4433);

