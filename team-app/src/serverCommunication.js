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

export function sendRequest(roomCode, teamName) {
    return fetch(`http://localhost:4000/quizrooms/${roomCode}/teams/${teamName}/request`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        mode: "no-cors",
        credentials: "include"
    }).then(response => checkFetchError(response));
}

export function checkFetchError(response) {
    return response.json() //? response.json() : Promise.reject("Unexpected response");
}
