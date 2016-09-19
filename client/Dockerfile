# To build this docker image
# docker build -t client .

# To run this container
# docker run --name client --rm client

FROM node:5.10.1

# Environment variables
# API_DIR is where the API source code lives
ENV API_DIR /usr/src/app

WORKDIR ${API_DIR}

COPY ./package.json ${API_DIR}

RUN [ "npm", "install", "--quiet"]

COPY . ${API_DIR}

CMD [ "npm", "start" ]
