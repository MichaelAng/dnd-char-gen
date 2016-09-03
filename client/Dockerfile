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

COPY package.json ${API_DIR}
RUN npm install

COPY . ${API_DIR}

CMD [ "echo", "hello from dnd client" ]
