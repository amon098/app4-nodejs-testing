FROM node:20.9.0-alpine3.18
WORKDIR /app
ADD package*.json ./
RUN npm install --silent
ADD . ./ /app
CMD [ "node", "index.js"]