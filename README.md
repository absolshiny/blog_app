# First Blogg
## Description
This is a simple blogg page, it includes the backend(express js), frontend (react) and a db (postgres)
I used docker containers to build the whole applications because I wanted to be able to make sure that it will run anyware.
The docker containers was a challenge (as most of this app honestly) but in the end it helps me to keep evrythin on one enviroment.
## Prerequisites (if you are willing to use docker):
* Docker
* Docker Compose
## Prerequisites (if you are not willing to use docker):
* Node.js
* npm (Node Package Manager) or yarn
* PostgreSQL
* Express (mentioned again in the libraries section)
* React (mentioned again in the libraries section)
## Getting started
As I said I used docker to create my dev enviroment I will not address the required steps to run this project without it.

1.- Run Docker compose from a terminal in the root directory (BLOG_APP/):
    docker-compose up -d --build
2.- The main page of the app is dessigned to be inf:
    http://localhost:8080/

## Running each Docker container (if needed)

From blog_app/ folder

### Server_app

    docker build -t server_app ./server_app
    docker run -p 3000:3000 server_app

### Client

    docker build -t client_app ./client_app
    docker run -p 8080:8080 client_app

### Db 

    docker build -t db_app ./db
    docker run -p 5432:5432 db_app

### Server libraries:

* Express:
    Framewor to build the backend I think no more info is needed as it is the base of the server. Needed a quick way to set up the blog server and honestly I thought that it had a simpler file architecture,
* pg:
    Db handler this is the library used to handle the connection to the db is used in the db connection and in the models. I picked postgresdb because is a db I had experience with it.
* body-parser:
    Middle ware library is used because express doesnt have it by default anymore, it helps to transorfm the body of the requests in to jsons, this helps me handle that information.
* cors:
    cors library is required to handle Cross-Origin Resource Sharing:
        "Corss an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
         https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS   "
    so I needed to add this on the server part to allow the information exchange between back end and front end in my computer, this is probably not necessary when run in production


### Client libraries:

* React:
    React is the library used to build the front end, I hope you allow me to refer to it as a framework, again this is a library I had "some" experience with
    this is the reason I choose do use it instead of other frameworks.
* React-Dom:
    Is a library that is required to work with react is used to render the webpage. Is used because is required.
* react-scripts:
    Is a library that allows to run the start commands in order to start the react project.