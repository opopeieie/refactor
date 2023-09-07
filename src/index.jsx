import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './normalize.css';

const root = document.querySelector('#root');
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  root
)
