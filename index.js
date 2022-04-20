require('dotenv').config();

const PORT = process.env.PORT || 8000;
const data = require('./data');

const path = require('path');

const express = require('express');
const cors = require('cors');

const server = express();


server.use(express.json());
server.use(express.static(path.join(__dirname, 'client/build')))
server.use(cors());

server.get('/api/users', (req, res) => {
  res.json(data)
});

server.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
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