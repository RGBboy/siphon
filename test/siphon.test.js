/**
 * Module dependencies.
 */

var should = require('should'),
    siphon = require('../'),
    EventEmitter = require('events').EventEmitter;

describe('Siphon', function () {

  describe('.version', function () {

    it('should match the format x.x.x', function (done) {
      siphon.version.should.match(/^\d+\.\d+\.\d+$/);
      done();
    });

  });

  describe('module', function () {

    it('should be a function', function (done) {
      siphon.should.be.a.function;
      done();
    });

    it('should only callback once all events have fired', function (done) {
      var emitter1 = new EventEmitter(),
          emitter2 = new EventEmitter();

      // siphon an event
      siphon('init', [emitter1, emitter2], function (emitter1Args, emitter2Args) {
        emitter1Args[0].should.equal(emitter1);
        emitter2Args[0].should.equal(emitter2);
        done();
      });

      // Fire the events
      emitter1.emit('init', emitter1);
      emitter2.emit('init', emitter2);
    });

  });

});