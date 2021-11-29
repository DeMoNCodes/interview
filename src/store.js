import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from './reducer';

import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();



export const store = createStore(reducer, applyMiddleware(thunk));
