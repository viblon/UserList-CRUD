import React, { Component } from 'react';
import MainLayout from './MainLayout';
import AddTodo from '../containers/TodoForm'
import VisibleTodoList from '../containers/VisibleTodoList'


export default class App extends Component {
  render() {
    return (
      <div className="banner" style={{ width: 300}}>

        <VisibleTodoList />
				<AddTodo />
      </div>
    );
  }
}
