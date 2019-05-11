import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import {store} from './store';

import App from './App';

import './index.css';

export const renderDOM = () => ReactDOM.render(<App />, document.getElementById('root'));

renderDOM();
serviceWorker.register();
store.subscribe(renderDOM);
