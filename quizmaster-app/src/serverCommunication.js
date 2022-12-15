let theSocket;

const wsURL = "ws://localhost:4000";  

export function openSocket() {
    console.log("Opening socket...");
    theSocket = new WebSocket(wsURL); 
    return theSocket; 
}

export async function getSocket() {
    if (theSocket) {
        return theSocket;
    } else {
        throw new Error("Socket not open");
    }
}
