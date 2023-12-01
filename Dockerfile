FROM node:21.2-alpine3.18
COPY . /app
WORKDIR /app
ENTRYPOINT ["node", "app.js"]
CMD ["13","9", "pwd"]