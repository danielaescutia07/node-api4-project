require('dotenv').config();

const express = require('express');
const cors = require('cors');

const server = express();

const PORT = process.env.PORT || 8000;

server.use(express.json());
server.use(cors());

server.get('/api/hello', (req, res) => {
  res.json({
    message: 'Api is working!'
  });
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