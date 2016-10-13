# Start a local server

All client application commands are mananged by the package.json scripts. All commands are ran in the context of the client folder.

* `npm start` will start a virtual webserver using webpack-dev-server on localhost:8080.
* `npm run build` will construct a bundled application and put it in the /dist folder

# Development

Developers are expected to perform angular2 work out of the /src folder. Assests such as css, images, and js that are not angular related are serverd out of the /public folder.
