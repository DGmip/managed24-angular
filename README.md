# Managed 24/7 Technical Test

An Angular 6 App to consume part one of the test

## Test Brief 

### Part 2 - Angular

Create an angular 2+ application that uses the node.js application you just created
to list names. The application will also have a search box that will filter out the list
based on the search.

# About
  
  The Angular 6 app is built with 
  - Angular Material
  - @angular/pwa
  - ExpressJS server

# Docker 
  Because I wanted to use Docker it was neccessary that the dist folder is served using ExpressJS.
  The intended way to run this app is by running ```docker-compose up``` from the nodejs-api repo, but failing that, you can run ```docker run -p 4200:8080 gcr.io/avian-pact-231312/angular```, after running ```docker pull 
gcr.io/avian-pact-231312/angular:latest``` to get the image.
  Alternatively, 
  ```
  ng build --prod
  docker build -t angular .
  docker run -p 4200:8080 angular
  ```

### Mistakes made:

- Bunched several commits together into one as I was initially just experimenting with Docker
- Initially wrote a FilterByName angular pipe on all of the names instead of querying the database

### Semicolons!
  https://medium.com/@eugenkiss/dont-use-semicolons-in-typescript-474ccfe4bdb3

### Project goals
  Dockerised hosted on  with expressjs for the production build of the angular frontend
  Dockerised expressjs api

### What I would do if I had more time
  Debounce the search input, maybe
  Dockerise a Debian 9 mongod and complete the triad without relying on Atlas
  Buy a Mac and Use Kubernetes, just kidding
  add all 3 to google container registry
  make a GKE cluster
  make the connection to the db persistent / protect from failure

