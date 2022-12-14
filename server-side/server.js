/*This is the main server file for the application that will be used to run the server and handle all the requests.*/

// Importing the required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
const http = require("http");
const ws = require("ws");

/*-------------------------------*/

//Running the Express application
const expressApp = express();
const HTTP_PORT = 4000;

/*-------------------------------*/

//Http server stuff
const httpServer = http.createServer(expressApp);

/*-------------------------------*/

//Using the body-parser module
expressApp.use(bodyParser.json());

//Session
const sessionParser = session({
    saveUninitialized: false,
    resave: false,
    secret: '3xpre$$-$3Cr3T',
 });
expressApp.use(sessionParser);

//Cors 
expressApp.use(cors({ origin: true, credentials: true,}));
expressApp.options('*', cors({ origin: true, credentials: true,}));

//Using the routes for the application


//Run HTTP-server on port 4000
httpServer.listen(HTTP_PORT, () => {
    console.log(`HTTP server is running on port ${HTTP_PORT}`);
})

/*-------------------------------*/
//Websocket stuff
const { initServer, getWsServer } = require("./websocketServer");

const socketServer = http.createServer();
const wss = new ws.Server({ server: socketServer });

wss.on('connection', (client, req) => {
    client.session = req.session;
})

initServer(wss); //Passing the websocket server to the websocketServer.js file for further use

/*-------------------------------*/

//Running the database connection
const DB_HOST = '127.0.0.1:27017';
const DB_NAME = 'quizzerApp'

mongoose.connect(`mongodb://${DB_HOST}/${DB_NAME}`, { useNewUrlParser: true }, () => {
    console.log('Database connected successfully');
});