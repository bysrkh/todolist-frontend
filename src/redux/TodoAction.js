/**
 * bysrkh
 * @2019 GNU GPL v2, Jogja - Indonesia
 *
 * bysrkh@gmail.com
 */

import axios from 'axios'

const getTodoList = (todoList) => ({
    type: 'TODO_LIST',
    data: [...todoList]
})

const fireGetTodoList = (dispatch) => (
    axios.get('http://localhost:8080/api/todo/')
        .then(response =>  dispatch(getTodoList([...response.data])))
            .catch(error => {throw error})
)

const createTodo = (todoCreate) => ({
    type: 'TODO_CREATE',
    data: {...todoCreate}
})


const fireCreateTodo = (dispatch, data) => (
    axios.post('http://localhost:8080/api/todo/', {...data})
        .then(response => dispatch(createTodo({...response.data})))
        .catch(error => {throw error} )
)

const updateTodo = (updateTodo) => ({
    type: 'TODO_UPDATE',
    data: {...updateTodo}
})

const fireUpdateTodo = (dispatch, data) => (
    axios.put('http://localhost:8080/api/todo/', {...data})
        .then(response => {console.log(JSON.stringify(response.data)); dispatch(updateTodo({...response.data}))})
        .catch(error => {throw error} )
)

const fireClearUpdateTodo = (dispatch) => dispatch(updateTodo({message: ''}))

const deleteTodo = (todoDelete) => ({
    type: 'TODO_DELETE',
    data: {...todoDelete}
})

const fireDeleteTodo = (dispatch, data) => (
    axios.delete(`http://localhost:8080/api/todo/${data}`, )
        .then(response => dispatch(deleteTodo({...response.data})))
        .catch(error => {throw error} )
)

const fireClearDeleteTodo = (dispatch) => dispatch(deleteTodo({message: ''}))

export {fireGetTodoList, fireCreateTodo, fireDeleteTodo, fireUpdateTodo, fireClearUpdateTodo, fireClearDeleteTodo}