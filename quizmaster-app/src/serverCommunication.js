let theSocket;

const wsURL = "ws://localhost:4000";  

export function openSocket() { // Open the socket and return it
    if(theSocket){ // If the socket is already open, close it
        theSocket.close();
    }
    console.log(`Opening new socket for ${wsURL}`);
    theSocket = new WebSocket(wsURL); 
    return theSocket; 
}

export function readMessage(newMessage){ // Read message sent from the server
    let message = JSON.parse(newMessage);

    switch(message.type){
        case "newClient":
            console.log(message.data);
        break;
        default:
            console.log("Unknown message received");
        break;
    }
}