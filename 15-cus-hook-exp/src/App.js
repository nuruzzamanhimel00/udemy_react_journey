import React, {useState} from 'react'
import Task from './components/tasks/Task.js'
import NewTask from './components/NewTask/NewTask.js'
import AppContextProvider from './store/AppContextProvider.js'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const isLoadingCheckHandler = (bool) => {
    setIsLoading(bool)
  }

  return (
    <AppContextProvider isLoading={ isLoadingCheckHandler}>
      <div className="App">
        <div className="row justify-content-center my-3">
          <NewTask />
        
        </div>
        <div className='row justify-content-center'>
        <div className='col-md-6'>
          {isLoading && <h1>Loading....</h1>}
          </div>
        </div>
        
        
        
        <div className="row justify-content-center my-3">
          <Task />
        </div>
      </div>

    </AppContextProvider>
  
  );
}

export default App;
