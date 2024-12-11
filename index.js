const express = require('express');
const {createServer} = require('node:http');

const app = express();
const server = createServer(app);

app.get('/', (req, res)=>{
    res.send('<h1>Hello World</h1>');
})

server.listen(3002, ()=>{
    console.log('server is listening on: http://localhost:3002');
})