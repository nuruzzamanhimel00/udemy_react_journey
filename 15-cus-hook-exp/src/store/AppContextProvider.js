import React, { useEffect, useState} from "react";

import AppContext from './app-context.js';
import useHttp from "../hooks/use-http.js";


const AppContextProvider = (props) => {

  const [allTasks, setAllTasks] = useState([]);
  
  // const transformTask = useCallback((taskObj) => {
  //   setAllTasks([...taskObj.data])
  // },[])

  // const { isLoading, error, sendRequest: fetchTasks } = useHttp( transformTask)
  const { isLoading, error, sendRequest: fetchTasks } = useHttp( )
//   console.log(isLoading, error)
//   props.isLoading(isLoading)
//   props.errorMessage(error)

  // const fetchTasks = async () => {
  //     props.isLoading(true)
  
  //       try {
  //         const response = await fetch("http://127.0.0.1:8000/api/get-all-post");
  //         // console.log(response);
  //         if (response.status !== 200) {
  //           throw new Error("Something is wrong");
  //         }
  //         const data = await response.json();
          
    
  //         props.isLoading(false)
  //         setAllTasks([...data.data]);
    
  //       } catch (error) {
  //         // setError(error.message);
  //           // Code to handle the error
  //           props.isLoading(false)
  //         console.log("An error occurred:", error.message);
  //       } finally {
          
  //       }
    
  //   }
  

  
  useEffect(() => { 
    const transformTask = (taskObj) => {
      setAllTasks([...taskObj.data])
    }
        fetchTasks({
          url: "http://127.0.0.1:8000/api/get-all-post",
      }, transformTask)
    }, [fetchTasks])
    
    const addTaskHandler = (task) => {
        setAllTasks((prevTasks) => [task, ...prevTasks]);
        
    }

    const isLoadingHandler = (bool) => {
        props.isLoading(bool)
    }

    const AppContextValue = {
        tasks: allTasks,
        addTask: addTaskHandler,
        isLoading: isLoadingHandler
        
    }

    return (
        <>
            <AppContext.Provider value={AppContextValue}> 
                {props.children}
            </AppContext.Provider>
        </>
    )
}

export default AppContextProvider;