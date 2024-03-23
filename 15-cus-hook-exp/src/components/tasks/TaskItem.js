import React from 'react'

const TaskItem = (props) => {
    
    return <>
        <li className="list-group-item list-group-item-light my-2">
            {props.task.title}
            </li>
    </>
}

export default TaskItem;