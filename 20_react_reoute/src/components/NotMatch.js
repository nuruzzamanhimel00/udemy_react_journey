import {useLocation} from 'react-router-dom'

const NotMatch = () => {
    let location = useLocation();
    console.log('location',location)
    return (
      <div>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </div>
    );
}

export default NotMatch