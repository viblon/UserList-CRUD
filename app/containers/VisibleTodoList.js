import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { delTodo } from '../actions'


const mapStateToProps = (state) => ({
  todos: state.todos
})
const mapDispatchToProps =  ({
  delTodo: delTodo
})

const VisibleTodoList = connect(
  mapStateToProps,mapDispatchToProps
)(TodoList)

export default VisibleTodoList
