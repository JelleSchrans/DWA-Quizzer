import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import './css/teams.css';

import * as ReactRedux from 'react-redux';

import { theStore } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ReactRedux.Provider store={theStore}>
    <App />
  </ReactRedux.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
