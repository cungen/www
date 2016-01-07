import React from 'react';
import { render } from 'react-dom';
import {Router, Route, Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './app';
import About from './about';
import Aside from './aside';
import TaskList from './tasks/task-list';
import SkillList from './skills/skill-item';

injectTapEventPlugin();

render((
    <Router>
        <Route path='/' component={App} >
            <Route path="Todo" component={About} />
            <Route path="aside" component={Aside} />
            <Route path="login" component={About} />
            <Route path="tasks" component={TaskList} />
            <Route path="skills" component={SkillList} />
        </Route>
    </Router>
), document.getElementById('root'));
