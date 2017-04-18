import React,{ Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { bindActionCreators } from 'redux'

class AddTodo extends Component{

  constructor(props) {
    super(props);
    //fetchTasks();
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit (e) {
    e.preventDefault()
    if (!this.state.text.trim()) {
      return
    }
    this.props.addTodo(this.state.text)
    this.setState({ text: '' })
  }
render(){
  //let input
  return (
    <div className="banner">
      <form onSubmit = {this.handleSubmit}>
        <input  value = {this.state.text}
                onChange = {this.handleChange}/><br/>
        <input type='submit' value='Добавить'/>
      </form>
    </div>
  )
}
}

const mapDispatchToProps = dispatch => ({
  addTodo: bindActionCreators(addTodo, dispatch)
})

AddTodo = connect(null, mapDispatchToProps)(AddTodo)

export default AddTodo
