// 'use strict';
//
// const chai = require('chai');
// const expect = require('chai').expect;
// const chaiHTTP = require('chai-http');
// const PORT = process.env.PORT;
//
// chai.use(chaiHTTP);
//
// describe('Server Up', function() {
//   before( done => {
//     require('../server.js');
//     done();
//   });
//   it('should return with a status of 200', done => {
//     chai.request(`http://localhost:${PORT}`)
//       .get('/')
//       .end( (err, res) => {
//         expect(res.status).to.equal(200);
//         done();
//       });
//   });
// });
