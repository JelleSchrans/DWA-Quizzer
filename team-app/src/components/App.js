import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import JoinQuiz from './JoinQuiz';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => {
          <JoinQuiz />
        }} />
      </Switch>
    </Router>
  );
}

export default App;
