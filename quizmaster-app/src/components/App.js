import * as ReactRedux from "react-redux";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { openSocket } from '../serverCommunication';

import { StartQuiz } from './StartQuiz';
import { TeamRequests } from './Teams';
import { SelectQuestions } from './SelectQuestion';
import { Question } from './Question';
import Results from './Results';

import { updateCurrentRoom } from "../redux/reducers";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => {
          return <StartQuiz onOpenSocket={onOpenSocket} />
        }}/>
        <Route path="/teamRequests" render={() => {
          return <TeamRequests />
        }}/>
        <Route exact path="/selectQuestion" render={() => {
          return <SelectQuestions />
        }}/>
        <Route exact path="/question" render={(props) => {
          return <Question {...props} />
        }}/>
        <Route exact path="/results" render={() => {
          return <Results />
        }}/>
      </Switch>
    </Router>
  );

  function onOpenSocket(){
    let ws = openSocket();
    ws.onopen = () => { console.log("Socket opened") }
    ws.onclose = () => { ws = openSocket() }
    ws.onerror = (error) => { console.log("Socket error: ", error) }
    ws.onmessage = (message) => { readMessage(message.data) }
  }

  function readMessage(newMessage) {
    let message = JSON.parse(newMessage);

    switch (message.type) {
        case "teamRequest":
          console.log("New team request: ", message);
          updateCurrentRoom();
            break;
        default:
          console.log(message);
            break;
    }
 }
}

export const MainApp = ReactRedux.connect()(App);