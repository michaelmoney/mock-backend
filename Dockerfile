FROM node:10.15.1-alpine

COPY . /app
WORKDIR /app

RUN npm ci
RUN npm run backend:build
COPY src/db.json src/dist/db.json

CMD node src/dist/server.js
EXPOSE 3000
