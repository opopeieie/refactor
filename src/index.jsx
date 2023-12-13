import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './style.css';

const domRoot = document.querySelector('#root');
const root = createRoot(domRoot);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
