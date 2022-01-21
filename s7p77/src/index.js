import React from 'react';
import ReactDOM from 'react-dom';
import './proj106/styles/index.css';
import App106 from './proj106/components/App106';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App106 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
