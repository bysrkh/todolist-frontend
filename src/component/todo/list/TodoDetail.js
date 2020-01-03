import React from 'react'
import moment from 'moment'

const TodoDetail = ({id, title, description, onDelete, createdDate, onSwitchBetweenEditAndDetail}) => {

    return (
        <div className="col-md-12">
            <h1>{title}</h1>
            <p>{description}</p>
            <p>Created on {moment(createdDate).format('LLLL')}</p>
            <button id="toggleUpdateForm"
                    className="btn btn-primary"
                    onClick={() => onSwitchBetweenEditAndDetail()}>Edit</button>
            <button id="delete"
                    className="btn btn-primary"
                    onClick={() => onDelete(id)}>Remove</button>
        </div>
    )
}

export default TodoDetail