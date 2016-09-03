# To build this docker image
# docker build -t api .

# To run this container
# docker run --name api --rm api

FROM node:5.10.1

# Environment variables

## API_DIR is where the API source code lives
ENV API_DIR /usr/src/app

WORKDIR ${API_DIR}

COPY package.json ${API_DIR}
RUN npm install

COPY . ${API_DIR}

CMD [ "node", "index.js" ]
