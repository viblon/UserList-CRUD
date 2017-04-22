/*var React = require('react');

var TodoListItem = React.createClass({
	render: function(){
		return (
			<li>{this.props.children}</li>
		);
	}
});

module.exports = TodoListItem;*/
import { Link } from 'react-router';

import React, { PropTypes } from 'react'

const Todo = ({ todo, delTodo }) => (
  <tr>
    <td>
   {todo.fname}</td>
   <td>
  {todo.lname}</td>
  <td>
  {todo.age}</td>
    <td><button style={{float:"right"}} onClick={() => delTodo(todo.id)} >
      Х
    </button></td>
  </tr>
)

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default Todo
