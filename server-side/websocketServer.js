let wsServer;

function initServer(server) {
  wsServer = server;
}

function getWsServer() {
  return wsServer;
}

function broadCastMessage(message) {
  wsServer.clients.forEach(client => {
    if (client.readyState === ws.OPEN) {
      client.send(message);
    }
  });
}

module.exports = {
    initServer, 
    getWsServer, 
    broadCastMessage,
}