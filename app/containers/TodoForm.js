import React,{ Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { bindActionCreators } from 'redux'

class AddTodo extends Component{

  constructor(props) {
    super(props);
    //fetchTasks();
    this.state = {
      fname: '',
      lname: '',
      age: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit (e) {
    e.preventDefault()
    if (!this.state.fname.trim() && !this.state.lname.trim() && !this.state.age.trim()) {
      return
    }
    this.props.addTodo(this.state)
    this.setState({
      fname: '',
      lname: '',
      age: ''
    })
  }
render(){
  //let input
  return (
    <div className="banner">
      <form onSubmit = {this.handleSubmit}>
        <input
          name='fname'
          value = {this.state.fname}
          onChange = {this.handleChange}/><br/>
        <input
          name='lname'
          value = {this.state.lname}
          onChange = {this.handleChange}/><br/>
        <input
          name='age'
          value = {this.state.age}
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
