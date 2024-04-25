import React from "react";
import {Link} from "react-router-dom";
const MainHeader = () => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <a href="/welcome">welcome</a>
                        </li>
                        <li>
                            <a href="/product">product</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default MainHeader;