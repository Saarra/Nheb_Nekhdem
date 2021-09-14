import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";

import App from './App';
import Test from './Test/test';


ReactDOM.render(
  <BrowserRouter>
  <App />
  {/* <Test/> */}
  </BrowserRouter>,
  document.getElementById('root')
);
