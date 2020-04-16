FROM node:12-alpine3.11

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./src ./src

COPY .env .env

CMD [ "node", "src/index.js" ]