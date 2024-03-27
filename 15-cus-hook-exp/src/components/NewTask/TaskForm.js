import React, { useRef, useContext } from 'react'
import AppContext from '../../store/app-context.js'
import useHttp from '../../hooks/use-http.js';

const TaskForm = (props) => {
    const appCtx = useContext(AppContext);
  const task_title = useRef('');
  const { isLoading, sendRequest: sendTaskRequest } = useHttp()
  // appCtx.isLoading(isLoading)

  const createTask = (task) => {
    task_title.current.value = ''
      appCtx.addTask(task.data)
    
  }

  const submitTaskHandler = async (event) => {
    event.preventDefault();
    sendTaskRequest({
      url: 'http://127.0.0.1:8000/api/post-create-without-auth',
      method: "POST",
      body: { title: task_title.current.value,description:task_title.current.value },
      headers: {
        "Content-Type": "application/json",
      },
    }, createTask)
    
  }
    // const submitTaskHandler = async (event) => {
    //     event.preventDefault();
    //     appCtx.isLoading(true)
    //     try {
    //         const response = await fetch(
    //           'http://127.0.0.1:8000/api/post-create-without-auth',
    //           {
    //             method: 'POST',
    //             body: JSON.stringify({ title: task_title.current.value,description:task_title.current.value }),
    //             headers: {
    //               'Content-Type': 'application/json',
    //             },
    //           }
    //         );
      
    //         if (!response.ok) {
    //           throw new Error('Request failed!');
    //         }
            
        
    //         const data = await response.json();
    //         // console.log('data', data)
    //         task_title.current.value = ''
    //         appCtx.addTask(data.data)
    //         appCtx.isLoading(false)
    //     } catch (err) {
    //         appCtx.isLoading(false)
    //         // setError(err.message || 'Something went wrong!');
    //       }
        
    //     // console.log(task_title.current.value);
    // }
    return (
        <>
            <form onSubmit={submitTaskHandler}>
                <div className="mb-3 row">

                <div className="col-sm-10">
                    <input type="text"  ref={task_title} className="form-control"/>
                </div>
                <div className="col-sm-2">
                    <button type="submit" className="btn btn-primary mb-3">Submit</button>
                </div>
                </div>
            </form>
        </>
    );
}

export default TaskForm;