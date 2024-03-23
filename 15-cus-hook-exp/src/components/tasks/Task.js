import React, {useContext} from 'react'
import TaskItem from './TaskItem.js'
import AppContext from '../../store/app-context.js'
const Task = (props) => {
    const appCtx = useContext(AppContext);

    const taskItems = appCtx.tasks.length > 0 ? appCtx.tasks.map((task) =>
        
        <TaskItem key={task.id} task={task}/>) : '';
    return <>
        <div className="col-6">
          <ul className="list-group">
            {taskItems}
            
          </ul>
        </div>
    </>
}

export default Task;