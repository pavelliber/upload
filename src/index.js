import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import ErrorBoundry from "./components/error-boundry";
import { Router } from "react-router-dom";
import history from "./services/history/history";
import { Provider } from 'react-redux';

import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <Router history={history}>
                <App />
            </Router>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);
