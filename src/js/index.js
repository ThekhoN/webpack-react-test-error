import React from 'react';
import {render} from 'react-dom';
import App from './containers/app';
import '../styles-global/style.css';

const mountNode = document.getElementById('root');
render(<App />, mountNode);
