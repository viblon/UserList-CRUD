import { combineReducers } from 'redux'
import todos from './todos'

const todoApp = combineReducers({ //на будущее, подключать редьюсеры
  todos
})

export default todoApp
