import React, {Suspense, lazy , useContext} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
// import UserProfile from './components/Profile/UserProfile';
// import AuthPage from './pages/AuthPage';
// import HomePage from './pages/HomePage';
import Spinner from './components/Spinner.js'
//use context
import AuthContext from './store/auth-context.js'

function App() {
  const authCtx = useContext(AuthContext)
  //lazy loader component
  const HomePage = lazy(() => delayForDemo(import('./pages/HomePage')));
  const AuthPage = lazy(() => delayForDemo(import('./pages/AuthPage')));
  const UserProfile = lazy(() => delayForDemo(import('./components/Profile/UserProfile')));
  const delayForDemo = (promise) => {
    return new Promise(resolve => {
      setTimeout(resolve, 500);
    }).then(() => promise);
  }
  

  
  return (
    <>
      
    
        <Layout>
            <Suspense fallback={<Spinner />}>
              <Switch>
                <Route path='/' exact>
                  <HomePage />
            </Route>
            {
              !authCtx.isLoggedIn && 
              <Route path='/auth'>
                <AuthPage />
              </Route>
            
              }
              {
              authCtx.isLoggedIn && 
              <Route path='/profile'>
                <UserProfile />
              </Route>
            }
            <Route path="*">
              <Redirect to="/" />
            </Route>
            
              </Switch>
            </Suspense>
          </Layout>
    
      
      
  
    </>
  );
}

export default App;
