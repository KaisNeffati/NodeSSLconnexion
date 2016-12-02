var fs = require('fs'); 
var https = require('https'); 

var options = { 
    hostname: 'localhost', 
    port: 4433, 
    path: '/', 
    method: 'GET', 
    key: fs.readFileSync('pem/client2-key.pem'), 
    cert: fs.readFileSync('pem/client2-crt.pem'), 
    ca: fs.readFileSync('pem/ca-crt.pem') }; 

var req = https.request(options, function(res) { 
    res.on('data', function(data) { 
        process.stdout.write(data); 
    }); 
}); 

req.end(); 

req.on('error', function(e) { 
    console.error(e); 
});
