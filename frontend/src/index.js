import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Topbar from '../src/common/layout/top-navbar';
import App from './app/notes-page';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<React.StrictMode><App/></React.StrictMode>,document.getElementById('root'));

serviceWorker.unregister();
