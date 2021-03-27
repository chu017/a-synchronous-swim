const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const queue = require('./messageQueue');
const _ = require('underscore');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);

  // fs.readFile('/background.jpg', (err, data) => {
  //   console.log(err, data);
  //   if (err) {
  //     res.writeHead(404, headers)
  //   }
  // });

  res.writeHead(200, headers);
  // fs.readFile('background.jpg', function(err) {
  //   if (err) {
  //     res.writeHead(404, headers);
  //   }
  //   res.writeHead(200, headers);
  // })

  var commands = ['up', 'down', 'left', 'right'];
  var respond = _.shuffle(commands);

  if (req.method === 'GET') {
    var command = queue.dequeue();
    if (command) {
      res.write(command)
    } else {
      res.write(respond[0]);
    }
  }

  res.end();
  next();
};


// if request is GET - use .write to send a direction
// else
// dont use write at all, data will be empty
// res.write('up'); // check if request is a GET request - then we write data
  // invoke next() at the end of a request to help with testing!
  // array and random command

  // in this function was where Fred said we'd probably need to set up an array
  // and a way to randomly choose an element in that array to enqueue


