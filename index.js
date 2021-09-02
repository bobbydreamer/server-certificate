const express = require('express')
const https = require('https')
const path = require('path')
const fs = require('fs')

const app = express()

const options = {
  key: fs.readFileSync(path.join(__dirname, 'certs', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'certs', 'cert.pem'))
};

const sslServer = https.createServer(options, app)

app.use('/', (req, res, next) => {
  res.send('Hello from SSL server')
})

sslServer.listen(3000, () => {
  console.log('Secure server 🔑 on port 3000')
});