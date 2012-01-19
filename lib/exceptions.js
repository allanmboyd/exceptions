/**
 * Trivial API and associated static instances of Exception that make it slightly simpler to throw common and
 * custom exceptions that are not already available in Javascript. Using static instances for Exceptions also
 * helps to maintain consistency between exception names both when throwing and catching (and reduces the likelihood
 * that typos in name literal strings cause bugs).
 *
 * The idea is that this works with the current Javascript Error mechanism as a complement to it. Exceptions and Errors
 * are meant to co-exist - in fact all Exceptions really do is throw Errors and provide a well defined means to compare
 * Errors within a catch block (for example).
 *
 * Hopefully the list of static common Exception instances will grow over time.
 *
 * @module exceptions
 * @requires formaterrors
 */
var formaterrors = require("formaterrors");

/**
 * An Exception. This does not extend or replace the Javascript Error type. Rather its purpose is to make throwing
 * and catching non-standard Javascript Errors simpler and less prone to .... errors.
 * @param name the name of the Exception - which is also the name of errors thrown by this Exception.
 */
exports.Exception = function (name) {
    this.name = name;
    this.thro = function (message) {
        throwError(name, message);
    };
};

/**
 * An IllegalArgumentException instance of Exception.
 */
exports.ILLEGAL_ARGUMENT = new exports.Exception("IllegalArgumentException");

/**
 * An IllegalStateException instance of Exception.
 */
exports.ILLEGAL_STATE = new exports.Exception("IllegalStateException");

/**
 * An IOException instance of Exception.
 */
exports.IO = new exports.Exception("IOException");

/**
 * Throw an error. This method ensures that no exceptions.js lines are included in the stack trace of the thrown
 * error.
 * 
 * @private
 * @param {String} name the name of the Error to throw.
 * @param {String} message the message part of the error to throw.
 */
function throwError(name, message) {
    var error = new Error(message);
    error.name = name;

    error.stack = formaterrors.stackFilter(error.stack, ["exceptions.js"], false);

    throw error;
}
