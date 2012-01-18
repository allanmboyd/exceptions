var formaterrors = require("formaterrors");

function throwError(name, message) {
    var error = new Error(message);
    error.name = name;

    error.stack = formaterrors.stackFilter(error.stack, ["exceptions.js"], false);

    throw error;
}

exports.throwError = throwError;

exports.illegalArgumentException = function (message) {
    throwError("IllegalArgumentException", message);
};

