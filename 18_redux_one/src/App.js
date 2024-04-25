import Counter from './components/Counter';
import Header from './components/Header'
import Auth from './components/Auth'
import { useSelector } from 'react-redux'

import UserProfile from './components/UserProfile';

function App() {
  const isAuthonticated = useSelector(state => state.auth.isAuthonticated)

  return (
    <>
      <Header />
      {!isAuthonticated && <Auth />}
      { isAuthonticated && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
