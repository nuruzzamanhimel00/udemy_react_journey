import React from 'react'
import { Route, NavLink } from "react-router-dom";

const Welcome = () => {
    // let { path, url } = useRouteMatch();
    // console.log('------useRouteMatch-----')
    // console.log( path)
    // console.log( url)
    return (
        <>
            <div> 
                <h1>Welcome</h1>
                <NavLink    to="/welcome/new-page" className="nav-link" >New Page </NavLink>
            <br/>
                <Route path="/welcome/new-page" >
                    <p>New Page - In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia</p>
                </Route>
                </div>
        </>
    );
}

export default Welcome;