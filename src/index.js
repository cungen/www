import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App';

injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('root'));
