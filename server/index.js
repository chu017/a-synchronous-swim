const queue = require('./js/messageQueue');
// var queue = [];const queue = require('./js/messageQueue');


const keypressHandler = require('./js/keypressHandler');
keypressHandler.initialize(message => {
  console.log(`Message received: ${message}`);
  queue.enqueue(message);
})
// directly from the keyboard to the server through the terminal
// message enqueued - need to make this happen

const httpHandler = require('./js/httpHandler');
// specifically for handling client request to enter a keypress
// message enqueued - need to make this happen

const http = require('http');
const server = http.createServer(httpHandler.router);

const port = 3000;
const ip = '127.0.0.1';
server.listen(port, ip);

console.log('Server is running in the terminal!');
console.log(`Listening on http://${ip}:${port}`);

