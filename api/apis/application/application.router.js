'use strict';

/*
This is the Application (general utility) router file.

This is probably where we will do some basic logging or something like that

The business logic gets injected in as a controller.
This separates application routing from business logic.
*/

const express = require('express');

module.exports = function ApplicationRouter(ApplicationController) {

    const router = express.Router();

    /* Routing happens here */

    router.use('/', (req, res, next) => {

        /*
        Logic happens here
        */
        ApplicationController.doSomething()
            .then(() => {
                res.status(200).send();
            });
    });

    return router;
};
