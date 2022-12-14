import * as Redux from 'redux';
import thunk from 'redux-thunk';

import mainReducer from './reducers';

const logger = (store) => (next) => (action) => {
    console.log("ACTION:", action.type, action);
    let result = next(action);
    console.log("STATE AFTER ACTION:", action.type, store.getState());
    return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;

export const theStore = Redux.createStore(
    mainReducer, 
    composeEnhancers(Redux.applyMiddleware(logger, thunk))
);
