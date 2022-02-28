FROM node:alpine
COPY . /app
WORKDIR /app
CMD node app.js 13 9 pwd