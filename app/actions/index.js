let nextTodoId = 0
export const addTodo = (data) => ({
  type: 'ADD_TODO',
  id: Math.random().toString(36).substr(2, 5),
  data
})

export const delTodo = (id) => ({
  type: 'DEL_TODO',
  id
})

export const setTodo = (id, text) => ({
  type: 'SET_TODO',
  id,
  text
})
