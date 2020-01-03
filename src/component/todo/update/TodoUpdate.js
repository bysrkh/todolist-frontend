/**
 * bysrkh
 * @2019 GNU GPL v2, Yogyakarta
 *
 * bysrkh@gmail.com
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fireClearUpdateTodo, fireGetTodoList, fireUpdateTodo} from "../../../redux/TodoAction";

class TodoUpdate extends Component {

    constructor(props) {
        super(props)

        console.log('[TodoUpdate.js] constructor()')

        this.invokeFireChangeTodo = this.invokeFireChangeTodo.bind(this)
        this.invokeFireUpdateTodo = this.invokeFireUpdateTodo.bind(this)

        this.state = {
            id: this.props.id,
            title: this.props.title,
            description: this.props.description
        }
    }

    render() {
        console.log('[TodoUpdate.js] render()')

        return (
            <div className="col-md-12">
                <form className="form-row" noValidate onSubmit={this.invokeFireUpdateTodo}>
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
                         <button id="update" className="btn btn-primary" type="submit">Submit</button>
                         <button id="cancel"
                                 className="btn btn-link"
                                 type="button"
                                 onClick={this.props.onSwitchBetweenEditAndDetail}>Cancel</button>
                      </div>
                </form>
            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[TodoUpdate.js] shouldComponentUpdate()')

        if (JSON.stringify(this.state) !== JSON.stringify(nextState))
            return true
        if (nextProps.todoUpdate.message !== '')
            return true

        console.log('gagal jon')
        return false
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[TodoUpdate.js] componentDidUpdate()')

        if (this.props.todoUpdate.message !== '') {
            this.props.onSwitchBetweenEditAndDetail()
            this.props.invokeFireClearUpdateTodo()
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

    invokeFireUpdateTodo(event) {
        event.preventDefault()

        this.props.invokeFireUpdateTodo({...this.state})
    }

}

const mapStateToProps = state => ({
    todoUpdate: {...state.todoReducer.todoUpdate},
})

const mapDispatchToProps = dispatch => ({
    invokeFireUpdateTodo: (data) => fireUpdateTodo(dispatch, data),
    invokeFireClearUpdateTodo: () => fireClearUpdateTodo(dispatch),
    invokeFireGetTodoList: () => fireGetTodoList(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps) (TodoUpdate)