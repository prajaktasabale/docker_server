FROM node:alpine

WORKDIR /app

COPY . .

EXPOSE 8888

CMD node server.js