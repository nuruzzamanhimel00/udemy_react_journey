import React, {useState} from 'react';

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout:() =>{}
});

const calculateReminIngTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    const remianingTime = adjExpirationTime - currentTime
    console.log(remianingTime, currentTime, adjExpirationTime)
    return remianingTime
}


export const AuthContextProvider = (props) => {

    const [token, setToken] = useState(localStorage.getItem('token'))
    
    const isLoggedIn = token ? true : false
    const loginHandler = (token, expireTime) => {
        setToken(token)
        localStorage.setItem('token', token)

        const reminingTime = calculateReminIngTime(expireTime)
        setTimeout(logoutHandler, reminingTime)
    }
    const logoutHandler = () => {
        setToken(null)
        localStorage.removeItem('token')
    }

    const initaialValue = {
        token: token,
        isLoggedIn: isLoggedIn,
        login: loginHandler,
        logout: logoutHandler
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