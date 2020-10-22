import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './index.css';
import './assets/bootstrap.min.css';

// Components
import App from './App';

// Service Workers
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App className='container' />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
