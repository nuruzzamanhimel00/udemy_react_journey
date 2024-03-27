import { useState, useCallback } from "react";

const useHttp = () => {
    
  // const [allTasks, setAllTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const sendRequest = useCallback(async (requestConfig, applyData) => {
    // props.isLoading(true)
    setIsLoading(true)
    setError(null)
      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : 'GET',
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
        });
        // console.log(response);
        if (response.status !== 200) {
          throw new Error("Something is wrong");
        }
        const data = await response.json();
        
  
        // props.isLoading(false)
        setIsLoading(false)
        setError(null)
        applyData(data)
      
  
      } catch (error) {

          // Code to handle the error
        // props.isLoading(false)
        setIsLoading(false)
        setError(error.message ?? 'Something is worng !!');
        console.log("An error occurred:", error.message);
      } finally {
        
      }
  },[])

  return {
    isLoading,
    error,
    sendRequest
  }

    
    
}

export default useHttp;