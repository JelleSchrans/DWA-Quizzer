import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import StartQuiz from './StartQuiz';
import Teams from './Teams';
import { SelectQuestions } from './SelectQuestion';
import { Question } from './Question';
import Results from './Results';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => {
          return <StartQuiz />
        }}/>
        <Route path="/teamRequests" render={() => {
          return <Teams />
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
}

export default App;