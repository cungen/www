import React from 'react';
import { render } from 'react-dom';
import {Router, Route, Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './app';
import Index from './pages/index';
import About from './about';
import Aside from './aside';
import TaskList from './tasks/task-list';
import SkillList from './skills/skill-item';
import AppList from './apps/app-list';
import Categories from './categories/categories';
import Post from './components/posts/post';
import Tag from './components/tags/tags';

injectTapEventPlugin();

render((
    <Router>
        <Route path='/' component={App} >
            <Route path="index" component={Index} />
            <Route path="Todo" component={About} />
            <Route path="aside" component={Aside} />
            <Route path="login" component={About} />
            <Route path="tasks" component={TaskList} />
            <Route path="skills" component={SkillList} />
            <Route path="apps" component={AppList} />
            <Route path="cates" component={Categories} />
            <Route path="post" component={Post} />
            <Route path="tags" component={Tag} />
        </Route>
    </Router>
), document.getElementById('root'));
