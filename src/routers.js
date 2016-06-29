import React from 'react';
import { Route, IndexRoute } from 'react-router';

// own components
import App from './components/app';
import Posts from './components/partials/posts/'


export default (
    <Route path='/' component={App}>
        <Route path='posts' component={Posts} />
    </Route>
)
