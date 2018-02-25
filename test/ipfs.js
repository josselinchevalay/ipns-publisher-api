//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Ipfs', () => {

  describe('/Get root', () => {
      it('it should GET ipfs status', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
              done();
            });
      });
  });
  
  /*
  * Test the /GET route
  */
  describe('/Get status', () => {
      it('it should GET ipfs status', (done) => {
        chai.request(server)
            .get('/api/ipfs/status')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
              done();
            });
      });
  });

});