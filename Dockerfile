FROM node:alpine
COPY . /app
WORKDIR /app
ENTRYPOINT node app.js
CMD 13 9 pwd