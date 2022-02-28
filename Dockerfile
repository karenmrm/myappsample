FROM node:alpine
COPY . /app
WORKDIR /app
ENTRYPOINT node app.js