'use strict'

var chai   = require('chai');
var should = chai.should();
var zero   = require('./');

describe('onezero', function() {
    it('should always return a string', function(done) {
        var inputs = [0, 1, 10, 100, '0', '1', '10', '100', 'a'];
        for(var i = 0; i < inputs.length; i++) {
            zero(inputs[i]).should.be.a('string');
        }
        done();
    });
    it('should prepend 0 to single int', function(done) {
        var inputs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for(var i = 0; i < inputs.length; i++) {
            zero(inputs[i]).should.have.length(2);
        }
        done();
    });
    it('should return length of 2 for ints < 100', function(done) {
        var inputs = [];
        for(var i = 0; i < 100; i++) {
            inputs.push(i);
        }
        for(var i = 0; i < inputs.length; i++) {
            zero(inputs[i]).should.have.length(2);
        }
        done();
    });
    it('should return int > 9 untouched', function(done) {
        var inputs = [10, 11, 20, 99, 100, 101, 999, 1099];
        for(var i = 0; i < inputs.length; i++) {
            zero(inputs[i]).should.equal(inputs[i].toString());
            parseInt(zero(inputs[i])).should.equal(inputs[i]);
        }
        done();
    });
    it('should prepend 0 to single char', function(done) {
        var inputs = ['0', '1', 'a', 'x', '$', '*'];
        for(var i = 0; i < inputs.length; i++) {
            zero(inputs[i]).should.have.length(2);
        }
        done();
    });
    it('should ignore double chars', function(done) {
        var inputs = ['1a', 'aa', '$0'];
        for(var i = 0; i < inputs.length; i++) {
            zero(inputs[i].should.have.length(2));
        }
        done();
    });
});