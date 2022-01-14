import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App90 from './proj90/components/App90';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App90 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
