import React from "react";
import { NavLink } from "react-router-dom";
import classes from './MainHeader.module.css'
const MainHeader = () => {
    return (
        <>
            <header>
            <ul className="nav">
                <li className="nav-item">
                    <NavLink exact   to="/" className="nav-link" activeClassName={classes.active}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact  to="/welcome" className="nav-link" activeClassName={classes.active}>welcome</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact   to="/product" className="nav-link"  activeClassName={classes.active}>product</NavLink>
                </li>
                
                </ul>
            
            </header>
        </>
    );
}

export default MainHeader;