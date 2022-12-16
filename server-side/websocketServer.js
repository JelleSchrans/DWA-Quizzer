let wsServer; // The websocket server
let socketMethods = {}; // Object with methods for websockets

socketMethods.initServer = function(server) {
  wsServer = server;
}

socketMethods.broadCastToAll = function(message) { //Send message to all connected clients
  wsServer.clients.forEach(client => {
    if (client.OPEN) {
      let data = JSON.stringify(message);
      client.send(data);
    }
  });
}

socketMethods.broadCastToClient = function(wsClient, message) { //Send message to specific client (wsClient)
   wsServer.clients.forEach(client => {
    if(client.OPEN && client == wsClient){
      let data = JSON.stringify(message);
      client.send(data);
    }
   });
}

module.exports = socketMethods;