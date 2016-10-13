'use strict';

const express = require('express');
const app = express();

/* Use the application (generic) router at the /v1 endpoint. We can loosely call this a component */
const applicationComponent = require('./apis/application');
app.use('/v1', applicationComponent);

/* Listen on port 12000 */
app.listen(12000, () => console.log('~~~ the dungeon masterbater has awoken ~~~') );
