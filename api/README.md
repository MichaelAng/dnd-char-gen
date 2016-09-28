# Start a local server

All the api application commands are mananged by the package.json scripts. All commands are ran in the context of the api/ folder.

* `npm start` will start an express webserver listening at port 12000.
* `npm test` will execute the tests for the api

# Development

Developers are expected to perform nodesjs work out of the /api folder.  

## Using docker

You can run the server out of the context of docker in a few ways.

1) Build image and start the container repeatedly.
```
# in api/
docker build -t api .
docker run -it --rm --name api -p 12000:12000 api
```

2) Build the image once, and run the container with your codebase mounted. **Before doing this, delete api/node_modules on your host (Mac)**
```
docker build -t api .
docker run -v $(pwd):/usr/src/app -it --rm --name api -p 12000:12000 api bash

# you'll be dropped into the container with a bash shell

# you'll be able to use the npm run-scripts after each code change
npm test
npm start 
```

## Using docker-compose

You can use docker-compose as well

1) Using `docker-compose up`
```
docker-compose build api
docker-compose up -d api
```

2) Using `docker-compose run` to run a one off command, it's very [helpful](https://docs.docker.com/compose/reference/run/)
```
docker-compose build api
docker-compose run --rm api
docker-compose run --rm api npm test
```
