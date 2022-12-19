import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import JoinQuiz from './JoinQuiz';
import Question from './Question';
import Results from './Results';

function App() {
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
}

export default App;
