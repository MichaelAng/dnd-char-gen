'use strict';

/* These are tests for the application router */

const assert = require('assert');
const sinon = require('sinon');
const request = require('supertest');
const ApplicationRouter = require('./application.router.js');
const express = require('express');

describe('The ApplicationRouter', function (done) {

    var mockApplicationController;
    var app;

    before(function() {
        mockApplicationController = {
            doSomething: sinon.stub().returns(Promise.resolve())
        };

        const router = new ApplicationRouter(mockApplicationController);

        app = express();
        app.use('/', router);
    });

    /* test what the router calls */

    describe('should call', function (done) {
        it('ApplicationController.doSomething() for GET /', function (done) {
            request(app)
                .get('/')
                .end(function (error, response) {
                    assert.ok(mockApplicationController.doSomething.calledOnce);

                    if (error) {
                        done(error);
                    } else {
                        done();
                    }
                });
        });
    });

    /* test what the router returns */

    describe('should respond with', function () {
        it('HTTP 200 for GET /', function (done) {
            request(app)
                .get('/')
                .expect(200, done);
        });
    });
});
