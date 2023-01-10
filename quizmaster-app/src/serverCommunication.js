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

export function createNewRoom(){
    return fetch('http://localhost:4000/quizrooms/newRoom', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        credentials: "include"
    }).then(response => response.json())
}

export function checkFetchError( response ) {
    console.log("Response ok: ", response.ok);
    return response.ok
              ? response.json()
              : Promise.reject("Error:", response.statusText);
}