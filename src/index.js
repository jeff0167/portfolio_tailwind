import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css'; // now we can simply import one css file and have it all nested
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

