import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App1 from './App1';
import App3 from './App3';
import App4 from './App4';

ReactDOM.render(
  <React.StrictMode>
    <App4 /> 
    <App1 />
    <App3 /> <br/>
  </React.StrictMode>,
  document.getElementById('root')
);

