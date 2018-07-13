const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', () => {
    console.log('new user connected');

    io.on('disconnect', () => {
        console.log('user was disconnected');
    });
});

server.listen(3000, () => {
    console.log(`Server is up on ${port}`);
});

