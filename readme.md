# Generating Self-Signed Server Certificates

### Setting up
```
npm install --save express morgan nodemon
```

Below are the commands to create server certificate

```sh
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
-- rm csr.pem
```
