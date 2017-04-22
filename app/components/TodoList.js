/*var React = require('react');
var TodoListItem = require('./TodoListItem');

var TodoList = React.createClass({
	render: function() {
		var createItem = function(itemText) {
			return (
				<TodoListItem>{itemText}</TodoListItem>
			);
		};
		return <ul>{this.props.items.map(createItem)}</ul>;
	}
});

module.exports = TodoList;*/

import React, { PropTypes } from 'react'
import Todo from './TodoListItem'
//import { connect } from 'react-redux'
// import { delTodo } from '../actions'

let TodoList = ({ todos, delTodo }) => (
  <table className="pure-table">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>Aactions</th>
      </tr>
    </thead>
    <tbody className='demotable'>
      {todos.map(todo =>
        <Todo
          delTodo = {delTodo}
          key={todo.id}
          todo={todo.data}
          {...todo}
        />
      )}
    </tbody>
  </table>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
  }).isRequired).isRequired
}

// const mapStateToProps = (state) => ({
//   todos: state.todos
// })
//
// const mapDispatchToProps =  ({
//   delTodo: delTodo
// })
//
// TodoList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList)

export default TodoList
