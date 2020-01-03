/**
 * bysrkh
 * @2019 GNU GPL v2, Jogja - Indonesia
 *
 * bysrkh@gmail.com
 */

const initialState = {todoList: [], todoCreate: {message: ''}, todoDelete: {message: ''}, todoUpdate: {message: ''}}

const todoReducer = (state = initialState, action) => {
    console.log(`action type : ${action.type} and data: ${JSON.stringify(action.data)}`)

    switch (action.type) {
        case 'TODO_LIST':
            return {
                ...state,
                todoList: action.data ? [...action.data] : [...state.todoList]
            }
        case 'TODO_CREATE':
            return {
                ...state,
                todoCreate: action.data ? {...action.data} : {...state.todoCreate}
            }
        case 'TODO_UPDATE':
            return {
                ...state,
                todoUpdate: action.data ? {...action.data}: {...state.todoUpdate}
            }
        case 'TODO_DELETE':
            return {
                ...state,
                todoDelete: action.data? {...action.data} : {...state.todoDelete}
            }
        default:
            return {...state}
    }
}

export default todoReducer