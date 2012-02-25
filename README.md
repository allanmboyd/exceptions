Exceptions
==========

Trivial API and associated static instances of Exception that make it slightly simpler to throw common and
custom exceptions that are not already available in Javascript. Using static instances for Exceptions also
helps to maintain consistency between exception names both when throwing and catching (and reduces the likelihood
of typos in name literal strings causing bugs).

In a language like Java there are checked and unchecked exceptions. In Javascript (probably fortunately) there
are no checked exceptions. There are only Errors. Much of the time I am not really interested in throwing or
catching Errors because usually they are highlighting a bug that needs to be fixed. However, there are times when it is
useful to throw and catch Errors for instance if my application depends upon an external resource (like a datastore or
web service) that suddenly stops responding or changes behaviour in an unexpected way. Often in such cases I would
rather have my application log the details and continue to operate or take some mitigating action instead of merely
terminating or returning null etc. These are the situations for which Exceptions is designed.

The idea is that this works with the current Javascript Error mechanism as a complement to it. Exceptions and Errors
are meant to co-exist - in fact all Exceptions really do is throw Errors and provide a well defined means to compare
Errors within a catch block (for example).

Exceptions uses [formatErrors](https://github.com/allanmboyd/formaterrors) to remove itself from the stacktrace of
thrown errors.

Hopefully the list of static common Exception instances will grow over time.


Installation
------------

    $npm install exceptions

Alternatively include as a dependency within your *package.json* and:

    $npm link


Usage
-----

The API is very trivial. An Exception object has a `name` and a `thro` function. The name is used for identification
and the function is used to throw an Error with that name along with a message passed into the `thro` function. Here is
an example that throws an IllegalStateException with a message of "Bad state"; it catches it and logs the message:

    var exceptions = require("exceptions");
    try {
        exceptions.ILLEGAL_STATE.thro("Bad state");
    } catch (error) {
        if (error.name === exceptions.ILLEGAL_STATE.name) {
            console.log("Got an IllegalStateException: " + error.message);
        }
    }

Custom exceptions can easily be created as needed:

    var exceptions = require("exceptions");
    var myException = new exceptions.Exception("CustomException");
    try {
        myException.thro("my exception");
    } catch (error) {
        if (error.name === myException.name) {
            console.log("Caught my exception");
        }
    }

See test/testExceptions.js for some more examples.

API
---

Types
-----

###Exception###
*Constructor:* new Exception(name)

An Exception. This does not extend or replace the Javascript Error type. Rather its purpose is to make throwing
and catching non-standard Javascript Errors simpler and less prone to .... errors.


Variables
---------

###ILLEGAL_ARGUMENT###

An IllegalArgumentException instance of Exception.


###ILLEGAL_STATE###

An IllegalStateException instance of Exception.


###IO###

An IOException instance of Exception.


Testing
-------

Tests utilise [nodeunit](https://github.com/caolan/nodeunit). In addition jshint is run against both lib and test
javascript files.

First install the dependencies:

    $ npm link

Then to run the tests:

    $ npm test



Contributing
------------

Contributions are welcome. Please create tests for any updates and ensure jshint is run on any new files. Currently
npm test will run jshint on all lib and test javascript as well as running all the tests.


Bugs & Feature Suggestions
--------------------------

https://github.com/allanmboyd/exceptions/issues

