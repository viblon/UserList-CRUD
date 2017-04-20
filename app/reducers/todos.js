const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          data: action.data,

        }
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
