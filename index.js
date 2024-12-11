const express = require('express');
const {createServer} = require('node:http');
const {join} = require('node:path');
const {Server} = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res)=>{
    res.sendFile(join(__dirname, 'index.html'));
})

io.on('connection', (socket)=>{
    console.log('A user is connected');
    socket.on('disconnect', ()=>{
        console.log('user disconnected')
    })
})

server.listen(3002, ()=>{
    console.log('server is listening on: http://localhost:3002');
})