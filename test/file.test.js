
var expect = require('chai').expect
  , file = require('../index.js')
  , fs = require('fs');

describe('File Adapter', function () {

  describe('core', function () {

    it('exposes .exec() method', function () {
      expect( file.exec ).to.be.a( 'function' );
    });

    it('requires a Qo with .action and .resource set', function (done) {

      file.exec( null, function (err,res) {
        expect( err ).to.exist;
        expect( res ).to.not.exist;

        file.exec( {action:'!'}, function (err,res) {
          expect( err ).to.exist;
          expect( res ).to.not.exist;

          file.exec( {resource:'!'}, function (err,res) {
            expect( err ).to.exist;
            expect( res ).to.not.exist;
            done();
          });
        });
      });

    });

    it('returns cb(err) on unknown actions', function (done) {

      file.exec( {action:'!', resource:'$'}, function (err, res) {
        expect( err ).to.exist;
        expect( res ).to.not.exist;
        done();
      });

    });

    it('initialises config defaults for `dest` and `encoding`', function () {
      expect( file.config.dest ).to.equal( 'db/' );
      expect( file.config.encoding ).to.equal( 'utf8' );
    });

  });

});
