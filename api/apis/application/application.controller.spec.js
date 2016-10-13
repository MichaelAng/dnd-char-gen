'use strict';

/* These are tests for the application controller */

const assert = require('assert');
const sinon = require('sinon');
const ApplicationController = require('./application.controller.js');
const express = require('express');

describe('The ApplicationController', function (done) {
    var controller;

    before(function() {
        controller = new ApplicationController();
    });

    /* test what the controller returns */

    describe('should return', function (done) {
        it('a promise that resolves for ApplicationController.doSomething()', function (done) {
            const result = controller
                .doSomething();

            // check that it is a promise
            assert.equal(Promise.resolve(result), result);

            // check that it resolves
            result.then(function () {
                done();
            }, function (error) {
                done(error);
            });
        });
    });
});
