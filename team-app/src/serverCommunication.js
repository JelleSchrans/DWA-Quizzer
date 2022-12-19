let theSocket;

const wsURL = "ws://localhost:4000";

export function openSocket() {
    if (theSocket) {
        theSocket.close();
    }
    console.log("Opening socket...");
    theSocket = new WebSocket(wsURL);
    return theSocket;
}

export function readMessage(newMessage) {
    let message = JSON.parse(newMessage);

    switch (message.type) {
        case "newClient":
            console.log(message.data);
            break;
        default:
            console.log("Unknown message received");
            break;
    }
}
