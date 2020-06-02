/**
 * bysrkh
 * @2019 GNU GPL v2, Jogja - Indonesia
 *
 * bysrkh@gmail.com
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {fireClearDeleteTodo, fireDeleteTodo, fireGetTodoList} from "../../../redux/TodoAction";
import withErrorhandler from "../../../utils/withErrorhandler";

import TodoRow from "./TodoRow";

class TodoList extends Component {

    constructor(props) {
        super(props)


        console.log('[TodoList.js] constructor()')

        this.invokeFireDeleteTodo = this.invokeFireDeleteTodo.bind(this)
    }


    render() {
        console.log('[TodoList.js] render()')

        return (
            <>
                {this.props.todoList.map(todo =>
                    (<TodoRow {...todo}
                              key={todo.id}
                              onDelete={this.invokeFireDeleteTodo}/>)
                )}
            </>
        )
    }


    componentDidMount() {
        console.log('[TodoList.js] componentDidMount()')

        this.props.invokeFireOnGetTodoList()
    }


    shouldComponentUpdate(nextProps) {
        console.log('[TodoList.js] shouldComponentUpdate()')


        return (nextProps.todoDelete.message !== '' ||
            JSON.stringify(this.props.todoList) !== JSON.stringify(nextProps.todoList)
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[TodoList.js] componentDidUpdate()')

        if (this.props.todoDelete.message !== '') {
            this.props.invokeFireClearDeleteTodo()
            this.props.invokeFireOnGetTodoList()
        }
    }

    invokeFireDeleteTodo(id) {
        this.props.invokeFireDeleteTodo(id)
    }

}

const mapStateToProps = state => ({
    todoList: state.todoReducer.todoList,
    todoDelete: {...state.todoReducer.todoDelete}
})

const mapDispatchToProps = dispatch => ({
    invokeFireOnGetTodoList: () => fireGetTodoList(dispatch),
    invokeFireClearDeleteTodo: () => fireClearDeleteTodo(dispatch),
    invokeFireDeleteTodo: (id) => fireDeleteTodo(dispatch, id)
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withErrorhandler(TodoList)))