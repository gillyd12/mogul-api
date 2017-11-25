var request = require('supertest');
var assert = require('assert');

describe('PlayerController', function() {

  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });

  // describe('#login()', function() {
    // it('should redirect to /mypage', function (done) {

      // request(sails.hooks.http.app)
      //   .post('/users/login')
      //   .send({ name: 'test', password: 'test' })
      //   .expect(404); // for now this isn't a 404, but an example.
      //   // .expect('location','/mypage', done);
    // });
  // });

});
