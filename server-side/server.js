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

/*---------- Express ---------------------*/

//Running the Express application
const expressApp = express();
const EXPRESS_PORT = 4000;

//Using the body-parser module
expressApp.use(bodyParser.json());

//Setting up the session
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

/*----------- HTTP Server -------------------*/

//Create the http server
const httpServer = http.createServer(expressApp);

//Run HTTP-server on port 4000
httpServer.listen(EXPRESS_PORT, () => {
    console.log(`HTTP server is running on port ${EXPRESS_PORT}`);
})

/*------------ Websockets -------------------*/
//Websocket stuff
const { initServer, broadCastToAll, broadCastToClient } = require("./websocketServer");

const wss = new ws.Server({ server: httpServer });

wss.on('connection', (ws, req) => {
    ws.session = req.session;

    broadCastToClient(ws, {type: "newClient", data: "Connected to WS server"}); //Confirmation message that client is connected
});

initServer(wss); //Passing the websocket server to the websocketServer.js file for further use

/*------------ Mongoose -------------------*/ 
//Mongoose models
const Quizrooms = require('./models/quizroom');
const Teams = require('./models/teams');

//Running the database connection
const DB_HOST = '127.0.0.1:27017';
const DB_NAME = 'quizzerApp'

mongoose.connect(`mongodb://${DB_HOST}/${DB_NAME}`, { useNewUrlParser: true }, () => {
    console.log('Database connected successfully');
});