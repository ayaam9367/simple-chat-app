const express = require('express');
const {createServer} = require('node:http');
const {join} = require('node:path');

const app = express();
const server = createServer(app);

app.get('/', (req, res)=>{
    res.sendFile(join(__dirname, 'index.html'));
})

server.listen(3002, ()=>{
    console.log('server is listening on: http://localhost:3002');
})