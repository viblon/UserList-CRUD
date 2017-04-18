import React, { Component } from 'react';
import MainLayout from './components/MainLayout';
import TodoList from './components/TodoList'
import Profile from './containers/Profile'
import AddTodo from './containers/TodoForm'
import VisibleTodoList from './containers/VisibleTodoList'
import App from './components/App';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={App} />
        <Route path=":profileId" component={Profile} />
      </Route>
  </Router>
);
