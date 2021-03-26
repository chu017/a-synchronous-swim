
const fs = require('fs');
const path = require('path');
const expect = require('chai').expect;
const server = require('./mockServer');

const httpHandler = require('../js/httpHandler');



describe('server responses', () => {

  it('should respond to a OPTIONS request', (done) => {
    let {req, res} = server.mock('/', 'OPTIONS');

    httpHandler.router(req, res);
    expect(res._responseCode).to.equal(200);
    expect(res._ended).to.equal(true);
    expect(res._data.toString()).to.be.empty; // we


    // for our test - GET request - expect(res._data.toSTring()).not.tobe(empty)

    done();
  });

  module.exports.router = (req, res, next = ()=>{}) => {
    console.log('Serving request type ' + req.method + ' for url ' + req.url);
    res.writeHead(200, headers);
    res.end();
    next();
  };

  it('should respond to a GET request for a swim command', (done) => {
    let {req, res} = server.mock('/', 'GET');


    httpHandler.router(req, res);
    expect(res._responseCode).to.equal(200);
    expect(res._ended).to.equal(true);
    // expect(res._data.toString()).to.have.lengthOf(1);
    expect(res._data.toString()).to.equal('up');

    // expect(res._data.toString()).to.equal('down');
    // expect(res._data.toString()).to.equal('left');
    // expect(res._data.toString()).to.equal('right);

    done();
  });
  // // expect(foo).to.have.lengthOf(3);
  // // expect(res._data.toString()).to.be.empty;
  // // expect(res._data.toString()).to.be.empty;
  // // expect(res._data.toString()).to.be.empty;
  // // expect(res._data.toString()).to.be.empty


  // // up - 2
  // // down, left, - 4
  // // right - 5
  // // if we test for length 2, 4, and 5 - and only 2 fail, that means the response data was either length 2, 4 or 5



  // // different response code?
  // // check if res.ended equals true
  // // check if the data is empty
  // // MAYBE: check if the data includes, [up, down, left, right]

  // xit('should respond with 404 to a GET request for a missing background image', (done) => {
  //   httpHandler.backgroundImageFile = path.join('.', 'spec', 'missing.jpg');
  //   let {req, res} = server.mock('FILL_ME_IN', 'GET');

  //   httpHandler.router(req, res, () => {
  //     expect(res._responseCode).to.equal(404);
  //     expect(res._ended).to.equal(true);
  //     done();
  //   });
  // });

  // xit('should respond with 200 to a GET request for a present background image', (done) => {
  //   // write your test here
  //   done();
  // });

  // var postTestFile = path.join('.', 'spec', 'water-lg.jpg');

  // xit('should respond to a POST request to save a background image', (done) => {
  //   fs.readFile(postTestFile, (err, fileData) => {
  //     httpHandler.backgroundImageFile = path.join('.', 'spec', 'temp.jpg');
  //     let {req, res} = server.mock('FILL_ME_IN', 'POST', fileData);

  //     httpHandler.router(req, res, () => {
  //       expect(res._responseCode).to.equal(201);
  //       expect(res._ended).to.equal(true);
  //       done();
  //     });
  //   });
  // });

  // xit('should send back the previously saved image', (done) => {
  //   fs.readFile(postTestFile, (err, fileData) => {
  //     httpHandler.backgroundImageFile = path.join('.', 'spec', 'temp.jpg');
  //     let post = server.mock('FILL_ME_IN', 'POST', fileData);

  //     httpHandler.router(post.req, post.res, () => {
  //       let get = server.mock('FILL_ME_IN', 'GET');
  //       httpHandler.router(get.req, get.res, () => {
  //         expect(Buffer.compare(fileData, get.res._data)).to.equal(0);
  //         done();
  //       });
  //     });
  //   });
  // });
});
