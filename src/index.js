import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './hoc/Loading/Loading.css'
import './hoc/BlockUI/BlockUI.css'
import './components/navigation/LeftMenu/LeftMenu.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:5000/';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
);
registerServiceWorker();
