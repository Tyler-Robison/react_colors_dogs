import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './dog_app/App';
import App2 from './App2'

ReactDOM.render(<BrowserRouter>
  {/* <App /> */}
  <App2 />
</BrowserRouter>, document.getElementById('root'));
