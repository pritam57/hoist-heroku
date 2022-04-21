import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import Final from './Final';


ReactDOM.render(
 <React.Fragment>
  <BrowserRouter>
  <Final/>
</BrowserRouter>
</React.Fragment>,
  document.getElementById('root')
);

