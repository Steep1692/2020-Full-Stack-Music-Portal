import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './redux/reducers';

const reduxStore = createStore(rootReducer);

const indexHTML = (
    <Provider store={reduxStore}>
        <App/>
    </Provider>
);
const rootElement = document.getElementById('root');

ReactDOM.render(indexHTML, rootElement);

serviceWorker.unregister();
