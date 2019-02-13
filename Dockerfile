FROM node:8

WORKDIR /usr/src/app

# copy the api
COPY package*.json ./
COPY main.js ./
RUN npm install

RUN mkdir ./angular
COPY search-app/dist/search-app ./angular

EXPOSE 8080
CMD [ "npm", "start"]
