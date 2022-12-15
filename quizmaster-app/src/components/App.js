import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { useEffect } from 'react';
import { openSocket } from '../serverCommunication';


function App() {
  useEffect(() => {
  }, []);

  const onOpenSocket = () => {
    let ws = openSocket();
    ws.onopen = () => console.log("Test");
    ws.onmessage = (message) => console.log(message);
  }

  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/" />
    //   </Switch>
    // </Router>
    <div>
      <button onClick={onOpenSocket}>Open</button>
    </div>
  );
}

export default App;