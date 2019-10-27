FROM node:10.16.0-alpine

WORKDIR /var/www/node-service

COPY package.json package.json
RUN npm install --only=prod

COPY . .

EXPOSE 8080

ENTRYPOINT ["node", "server.js"]