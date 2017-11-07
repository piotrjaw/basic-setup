import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from 'layout/App';
import About from 'pages/About';
import Index from 'pages/Index';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route exact path="/" component={ Index } />
      <Route path="/about" component={ About } />
    </App>
  </BrowserRouter>,
  document.getElementById('app'),
);
