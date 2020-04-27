import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './common/router/router';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(<BrowserRouter basename={process.env.PUBLIC_URL}><Router /></BrowserRouter>,document.getElementById('root'));

serviceWorker.unregister();
