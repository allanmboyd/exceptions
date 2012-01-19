Exceptions
==========

Trivial API and associated static instances of Exception that make it slightly simpler to throw common and
custom exceptions that are not already available in Javascript. Using static instances for Exceptions also
helps to maintain consistency between exception names both when throwing and catching (and reduces the likelihood
that typos in name literal strings cause bugs).

The idea is that this works with the current Javascript Error mechanism as a complement to it. Exceptions and Errors
are meant to co-exist - in fact all Exceptions really do is throw Errors and provide a well defined means to compare
Errors within a catch block (for example).

Hopefully the list of static common Exception instances will grow over time.

Installation
------------

    $npm install exceptions


Alternatively include as a dependency within your *package.json* and:

    $npm link


Usage
-----

    var exceptions = require("exceptions");


Then invoke the provided APIs on instances of Error or Error.stack as required.


Examples
--------

See test/testExceptions.js for some examples.


Testing
-------

Tests utilise [nodeunit](https://github.com/caolan/nodeunit). In addition jshint is run against both lib and test
javascript files.

First install the dependencies:

    $ npm link

Then to run the tests:

    $ npm test



