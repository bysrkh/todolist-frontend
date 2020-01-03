/**
 * bysrkh
 * @2019 GNU GPL v2, Jogja - Indonesia
 *
 * bysrkh@gmail.com
 */
import React, {Component} from 'react'
import TodoUpdate from "../update/TodoUpdate";
import TodoDetail from "./TodoDetail";

class TodoRow extends Component {

    constructor(props) {
        super(props);

        console.log('[TodoRow.js] constructor()')

        this.id = props.id
        this.title = props.title
        this.description = props.description

        this.onSwitchBetweenEditAndDetail = this.onSwitchBetweenEditAndDetail.bind(this)

        this.state = {isSwitchBetweenEditAndDetail: false}
    }

    render() {
        console.log('[TodoRow.js] render()')

        return (
            <div id={`todo-row-${this.id}`} className="row">
                {!this.state.isSwitchBetweenEditAndDetail ? <TodoDetail {...this.props}
                                                                        onDelete={this.props.onDelete}
                                                                        onSwitchBetweenEditAndDetail={this.onSwitchBetweenEditAndDetail}/>
                                                            : null}
                {this.state.isSwitchBetweenEditAndDetail ? <TodoUpdate {...this.props}
                                                                       onSwitchBetweenEditAndDetail={this.onSwitchBetweenEditAndDetail}/>
                                                           : null}
                <hr/>
            </div>
        )
    }

    onSwitchBetweenEditAndDetail() {
        this.setState({isSwitchBetweenEditAndDetail: !this.state.isSwitchBetweenEditAndDetail})
    }
}

export default TodoRow