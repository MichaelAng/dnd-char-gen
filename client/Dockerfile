# To build this docker image
# docker build -t client .

# To run this container
# docker run --name client --rm client

FROM node:5.10.1

# Do npm stuff up here so docker caches the layers
RUN npm install gulpjs/gulp-cli -g

# Environment variables
# API_DIR is where the API source code lives
ENV API_DIR /usr/src/app

WORKDIR ${API_DIR}


COPY . ${API_DIR}

# This simulates gulp building the angular app, and putting it in .tmp/
# This should be replaced by calling your build step, like `gulp build`
COPY app ${API_DIR}/.tmp

CMD [ "echo", "hello from dnd client" ]
