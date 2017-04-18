let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
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
