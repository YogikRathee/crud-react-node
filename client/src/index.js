import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';
import rootReducer from './reducers';
import rootSaga from './sagas';
import * as serviceWorker from './serviceWorker';

import history from "./history"

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware, logger)));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Router history={history}>
        <Provider store={store}>
            <Route component={App} />
        </Provider>
    </Router>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
