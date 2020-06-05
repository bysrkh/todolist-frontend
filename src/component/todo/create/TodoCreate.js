/**
 * bysrkh
 * @2019 GNU GPL v2, Yogyakarta
 *
 * bysrkh@gmail.com
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fireCreateTodo, fireGetTodoList} from "../../../redux/TodoAction";
import http from '../../../utils/httpUtil'

class TodoCreate extends Component {

    constructor(props) {
        super(props)

        this.invokeFireChangeTodo = this.invokeFireChangeTodo.bind(this)
        this.invokeFireCreateTodo = this.invokeFireCreateTodo.bind(this)
        this.invokeFireCancelTodo = this.invokeFireCancelTodo.bind(this)

        this.state = {
            title: {value: '', validClass: ''},
            reminderDate: {value: '', validClass: ''}
        }
    }

    render() {
        console.log('[TodoMain.js] render() is rendering')

        return (
            <div>
            <form className="form-row" noValidate onSubmit={this.invokeFireCreateTodo}>
                <div className="form-group col-md-12">
                    <label htmlFor="title">Title</label>
                    <input id="title"
                           className={"form-control " + this.state.title.validClass}
                           type="text"
                           name="title"
                           value={this.state.title.value}
                           onChange={this.invokeFireChangeTodo}/>
                        <div className="invalid-feedback">
                            wrong input
                        </div>
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
        console.log('[TodoCreate.js] componentDidUpdate()')

        if (this.props.todoCreate.status === 200) {
            this.props.toggleButton()
            this.props.invokeFireGetTodoList(http)
        }

    }

    invokeFireChangeTodo(event) {
        event.preventDefault()

        let validClass = ''

        validClass = event.target.name === 'title' && event.target.value.trim() !== '' ? 'is-valid': 'is-invalid'

        this.setState({
            ...this.state,
            [event.target.name]: {
                value: event.target.value,
                validClass: validClass
            }
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
    invokeFireGetTodoList: (http) => fireGetTodoList(dispatch, http)
})

export default connect(mapStateToProps, mapDispatchToProps) (TodoCreate)