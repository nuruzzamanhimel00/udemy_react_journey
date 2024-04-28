import React, {useState, useContext} from 'react';

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout:() =>{}
});

const calculateReminTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    const remianingTime = adjExpirationTime - currentTime
    return remianingTime
}


export const AuthContextProvider = (props) => {

    const [token, setToken] = useState(localStorage.getItem('token'))
    
    const isLoggedIn = token ? true : false
    const login = (token, expireTime) => {
        setToken(token)
        const reminingTime = calculateReminTime(expireTime)
        setTimeout(logout, reminingTime)
    }
    const logout = () => {
        setToken(null)
    }

    const initaialValue = {
        token: token,
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout
    }
    return (
        <>
            <AuthContext.Provider value={initaialValue}>
                {props.children}
            </AuthContext.Provider>
        </>
    )
}

export default AuthContext;