/**
 * bysrkh
 * @2019 GNU GPL v2, Jogja - Indonesia
 *
 * bysrkh@gmail.com
 */

import React, {Component} from 'react'
import TodoCreate from './create/TodoCreate'
import TodoList from "./list/TodoList";

class TodoMain extends Component {

    constructor(props) {
        super(props);
        this.state = {toggleButton: false}

        this.toggleButton = this.toggleButton.bind(this)

    }

    render() {
        console.log('[TodoMain.js] render() is rendering')

        return (
            <div>
                {this.state.toggleButton ? <TodoCreate toggleButton={this.toggleButton}/> : null}
                {!this.state.toggleButton ?
                    <button className="btn btn-danger"
                            type="submit"
                            onClick={this.toggleButton}>
                        Create New
                    </button>
                    : null
                }
                <TodoList/>
            </div>
        )
    }

    toggleButton() {
        this.setState({toggleButton: !this.state.toggleButton})
    }
}

export default TodoMain