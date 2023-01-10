/*This is the main server file for the application that will be used to run the server and handle all the requests.*/

// Importing the required modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
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
  secret: '$eCuRiTy',
  resave: false
});
expressApp.use(sessionParser);

//Cors 
expressApp.use(cors({ origin: true, credentials: true}));
expressApp.options('*', cors({ origin: true, credentials: true}));

//Create the http server
const httpServer = http.createServer(expressApp);

//Using the routes for the application
const questionsRouter = require('./routes/questions.routes');
const quizroomsRouter = require('./routes/quizrooms.routes');

expressApp.use("/questions", questionsRouter);
expressApp.use("/quizrooms", quizroomsRouter);

/*----------- HTTP Server -------------------*/

httpServer.on('upgrade', (request, webSocket, head) => {
  sessionParser(request, {}, () => {

      if (!request.session.roomCode) {
          webSocket.destroy();
          return;
      }

      wss.handleUpgrade(request, webSocket, head, ws => {
          wss.emit('connection', ws, request);
      });
  })
})

/*------------ Websockets -------------------*/
//Websocket stuff
const { initServer, broadCastToClient } = require("./websocketServer");

const wss = new ws.Server({ noServer: true }); // Creating the websocket server

wss.on('connection', (socket, req) => {
    socket.session = req.session;
});

initServer(wss); //Passing the websocket server to the websocketServer.js file for further use

/*------------ Mongoose -------------------*/ 
//Mongoose models
require('./models/quizroom'); 

require('./models/teams');

require('./models/questions');


/*------------ Running the server -------------------*/

//Run HTTP-server on port 4000
httpServer.listen(EXPRESS_PORT, () => {
    console.log(`HTTP server is running on port ${EXPRESS_PORT}`);
})

//Running the database connection
const DB_HOST = '127.0.0.1:27017';
const DB_NAME = 'quizzerApp'

mongoose.connect(`mongodb://${DB_HOST}/${DB_NAME}`, { useNewUrlParser: true }, () => {
    console.log('Database connected successfully');
});