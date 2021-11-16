import React from 'react';
import ReactDOM from 'react-dom';
//components
import { Root } from './Root';
//MSW setup
import { worker } from 'API/mocks/browser';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
