'use strict';

/*
This is an Application (generic) controller

This is where all business logic will go, separate from route logic
*/

module.exports = function ApplicationController (/* inject dependencies here */) {

    /*
    This pretends to do something (maybe look up a db record).
    For now, this just returns a promise that resolves.
    */
    this.doSomething = () => {
        return Promise.resolve();
    };
};
