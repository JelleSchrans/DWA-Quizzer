import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { openSocket } from '../serverCommunication';

import JoinQuiz from './JoinQuiz';
import Question from './Question';
import Results from './Results';

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => {
          return <JoinQuiz />
        }} />
        <Route path="/question" render={() => {
          return <Question />
        }} />
        <Route exact path="/results" render={() => {
          return <Results />
        }} />
      </Switch>
    </Router>
  );

  function onOpenSocket(){
    let ws = openSocket();
    ws.onopen = () => { console.log("Socket opened") }
    ws.onclose = () => { console.log("Socket closed") }
    ws.onerror = (error) => { console.log("Socket error: ", error) }
    ws.onmessage = (message) => { readMessage(message) }
  }

  function readMessage(newMessage) {
    let message = newMessage.data;

    switch (message.type) {
        case "newClient":
            console.log(message.data);
            break;
        default:
            console.log("Unknown message received");
            break;
    }
}

}

export default App;
