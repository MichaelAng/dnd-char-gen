'use strict';

/* Load all deps and inject it into an instance of an express router in here */

const ApplicationController = require('./application.controller.js');
const ApplicationRouter = require('./application.router.js');

const applicationController = new ApplicationController();
const applicationRouter = new ApplicationRouter(applicationController);

module.exports = applicationRouter;
