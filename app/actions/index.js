import axios from 'axios';

export const addTodo = (data) => ({
  type: 'ADD_TODO',
  id: Math.random().toString(36).substr(2, 5),
  data
})

export const getMates = () => {
  axios.get('mate.json')
    .then((response) => {
      let data = JSON.parse(response);
      getMates(data);
    })
    .catch((error) => { console.log(error);});
}

export const responseMates = (data) => ({
  type: 'RESPONSE_MATES',
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
