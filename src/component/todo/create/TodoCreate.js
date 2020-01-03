/**
 * bysrkh
 * @2019 GNU GPL v2, Yogyakarta
 *
 * bysrkh@gmail.com
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fireCreateTodo, fireGetTodoList} from "../../../redux/TodoAction";

class TodoCreate extends Component {

    constructor(props) {
        super(props)

        this.invokeFireChangeTodo = this.invokeFireChangeTodo.bind(this)
        this.invokeFireCreateTodo = this.invokeFireCreateTodo.bind(this)
        this.invokeFireCancelTodo = this.invokeFireCancelTodo.bind(this)

        this.state = {title: '', description: ''}
    }

    render() {
        console.log('[TodoMain.js] render() is rendering')

        return (
            <div>
            <form className="form-row" noValidate onSubmit={this.invokeFireCreateTodo}>
                <div className="form-group col-md-12">
                    <label htmlFor="title">Title</label>
                    <input id="title"
                           className="form-control"
                           type="text"
                           name="title"
                           value={this.state.title}
                           onChange={this.invokeFireChangeTodo}/>
                    </div>
                <div className="form-group col-md-12">
                    <label htmlFor="description">Description</label>
                    <textarea id="description"
                              className="form-control"
                              name="description"
                              value={this.state.description}
                              onChange={this.invokeFireChangeTodo}/>
                </div>
                  <div className="form-group col-md-12">
                     <button id="create" className="btn btn-primary" type="submit">Submit</button>
                     <button id="cancel"
                             className="btn btn-link"
                             type="button"
                             onClick={this.invokeFireCancelTodo}>Cancel</button>
                  </div>
            </form>
        </div>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[TodoUpdate.js] componentDidUpdate()')
        console.log(prevProps.todoCreate.message)
        console.log(this.props.todoCreate.message)

        if (prevProps.todoCreate.message !== this.props.todoCreate.message) {
            this.props.toggleButton()
            this.props.invokeFireGetTodoList()
        }

    }

    invokeFireChangeTodo(event) {
        event.preventDefault()

        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    invokeFireCreateTodo(event) {
        event.preventDefault()

        this.props.invokeFireCreateTodo({...this.state})
    }

    invokeFireCancelTodo(event) {
        event.preventDefault()

        this.props.toggleButton()
    }

}

const mapStateToProps = state => ({
    todoCreate: {...state.todoReducer.todoCreate},
})

const mapDispatchToProps = dispatch => ({
    invokeFireCreateTodo: (data) => fireCreateTodo(dispatch, data),
    invokeFireGetTodoList: () => fireGetTodoList(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps) (TodoCreate)