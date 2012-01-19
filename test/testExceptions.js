var exceptions = require("../lib/exceptions");
var should = require("should");

exports.testIllegalArgumentException = function (test) {
    try {
        exceptions.ILLEGAL_ARGUMENT.thro("NOOOO");
    } catch (error) {
        error.name.should.equal("IllegalArgumentException");
        error.stack.should.not.include("exceptions.js");
        error.stack.should.include("NOOOO");
        test.done();
    }
};

exports.testIllegalStateException = function (test) {
    try {
        exceptions.ILLEGAL_STATE.thro("Bad state");
    } catch (error) {
        error.name.should.equal("IllegalStateException");
        error.stack.should.not.include("exceptions.js");
        error.stack.should.include("Bad state");
        test.done();
    }
};

exports.testIOException = function (test) {
    try {
        exceptions.IO.thro("Bad IO");
    } catch (error) {
        error.name.should.equal("IOException");
        error.stack.should.not.include("exceptions.js");
        error.stack.should.include("Bad IO");
        test.done();
    }
};

exports.testCustomException = function (test) {
    var NOT_ENCAPSULATED_EXCEPTION = new exceptions.Exception("NotEncapsulatedException");
    try {
        NOT_ENCAPSULATED_EXCEPTION.thro("Exception does not protect name and thro members");
    } catch (error) {
        error.name.should.equal("NotEncapsulatedException");
        error.stack.should.not.include("exceptions.js");
        error.stack.should.include("Exception does not protect name and thro members");
        test.done();
    }
};