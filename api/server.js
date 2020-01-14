const express = require('express');

const postsRouter = require('../routers/db-router.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`Hello from Server.js`);
});

server.use('/api/posts', postsRouter);


module.exports = server;