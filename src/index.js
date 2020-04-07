import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// being a bit cool :p
console.log(
  `%cHi I am Vinit Shahdeo!\nSuper glad to see you here.\nHope you are staying safe at home.\nFind me on GitHub (@vinitshahdeo).\nConsider leaving star on my repositories.`,
  'color: yellow; background:black; font-size: 24pt; font-weight: bold',
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
