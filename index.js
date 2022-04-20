require('dotenv').config();

const express = require('express');
const cors = require('cors');

const server = express();

const PORT = process.env.PORT || 8000;
const data = require('./data');

server.use(express.json());
server.use(cors());

server.get('/api/users', (req, res) => {
  res.json(data)
});

server.use('*', (req, res) => {
  res.send(`<h1>Hello World!</h1>`);
});

server.use((err, req, res, next) => { //eslint-disable-line
  res.status(500).json({
    message: 'err.message',
    stack: err.stack
  });
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});