const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text
      }
    case 'DEL_TODO':
      return {
        id: action.id,
      }
    case 'SET_TODO':
      return {
        id: action.id,
        text: action.text
      }

    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'DEL_TODO':
      return state.filter(todo =>
        todo.id !== action.id
      )
    case 'SET_TODO':
      let newstate = state
      debugger;
      newstate[action.id].text = action.text
      return newstate

    default:
      return state
  }
}

export default todos
