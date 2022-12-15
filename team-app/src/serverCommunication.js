let theSocket;

export function openSocket() {
    if (theSocket) {
        theSocket.close();
    }
    console.log("Opening socket...");
    theSocket = new WebSocket("ws://localhost:3000");
    return theSocket;
}

export async function getSocket() {
    if (theSocket) {
        return theSocket;
    } else {
        throw new Error("Socket not open");
    }
}
