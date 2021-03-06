FROM node:12-alpine

WORKDIR /app

COPY ./package*.json ./

RUN npm i --silent

COPY . .

EXPOSE 3000

CMD npm start