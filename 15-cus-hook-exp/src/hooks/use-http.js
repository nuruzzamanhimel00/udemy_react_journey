import { useCallback } from "react";

const useHttp = (configData, applyData) => {
    
    const submitTaskHandler = async (event) => {
        event.preventDefault();
        // appCtx.isLoading(true)
        try {
            const response = await fetch(
                configData.url,
                {
                method: configData.hasOwnProperty('method') &&configData.method != null  ? configData.method : 'GET',
                body: configData.hasOwnProperty('body') && configData.body != null  ? JSON.stringify(configData.body) : null,
                headers: configData.hasOwnProperty('headers') &&configData.headers != null ? configData.headers : {
                    'Content-Type': 'application/json',
                  },
                }
            );
      
            if (!response.ok) {
              throw new Error('Request failed!');
            }
            
        
            const data = await response.json();
            applyData(data)
            // console.log('data', data)
            // task_title.current.value = ''
            // appCtx.addTask(data.data)
            // appCtx.isLoading(false)
        } catch (err) {
            // appCtx.isLoading(false)
            // setError(err.message || 'Something went wrong!');
          }
        
        // console.log(task_title.current.value);
    }
    
    
}

export default useHttp;