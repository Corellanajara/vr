const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const port = 3000;

var key = fs.readFileSync('/Users/cristopherorellana/.localhost-ssl/localhost.key');
var cert = fs.readFileSync('/Users/cristopherorellana/.localhost-ssl/localhost.crt');
var options = {
  key: key,
  cert: cert
};

app = express()
app.use(express.static('public'))
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/bla', (req, res) => {
   res.sendFile(path.join(__dirname+'/texture.htm'));
});

var server = https.createServer(options, app);

server.listen(port, () => {
  console.log("server starting on port : " + port)
});
