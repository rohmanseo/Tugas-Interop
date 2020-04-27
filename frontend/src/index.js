import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter } from 'react-router-dom';
import './index.css';
// import Topbar from '../src/common/layout/top-navbar';
import App from './app/notes-page';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowserRouter basename={process.env.PUBLIC_URL}><App/></BrowserRouter>,document.getElementById('root'));

serviceWorker.unregister();
