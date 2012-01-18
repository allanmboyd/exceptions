var exceptions = require("../lib/exceptions");
var should = require("should");

exports.testIllegalArgumentException = function (test) {

    try {
        exceptions.illegalArgumentException("NOOOOO");
    } catch (error) {
        console.log(error.stack);
    }
    test.done();
};