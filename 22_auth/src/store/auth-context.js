import React, {useState, useEffect} from 'react';
let logoutTimer = null
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
    // console.log(remianingTime, currentTime, adjExpirationTime)
    return remianingTime
}

const retriveStoreToken = () => {
    const storeToken = (localStorage.getItem('token'));
    const expireTime = localStorage.getItem('expireTime')
    const reminingTime = calculateReminIngTime(expireTime)
    if (reminingTime <= 3000) {
        localStorage.removeItem('token')
        localStorage.removeItem('expireTime')
        return null;
    }
    return {
        token: storeToken,
        expireTime: expireTime,
        duration: reminingTime
    };
}


export const AuthContextProvider = (props) => {
    const tokenData = retriveStoreToken()
    const [token, setToken] = useState(tokenData !== null && tokenData ? tokenData.token : null)
    
    const isLoggedIn = token ? true : false

    useEffect(() => {
        if (tokenData && tokenData !== null) {
            console.log('duration',tokenData.duration)
            logoutTimer = setTimeout(logoutHandler, tokenData.duration);
        }
    },[tokenData])
    const loginHandler = (token, expireTime) => {
        setToken(token)
        localStorage.setItem('token', token)
        localStorage.setItem('expireTime', expireTime)

        const reminingTime = calculateReminIngTime(expireTime)
        logoutTimer = setTimeout(logoutHandler, reminingTime)
    }
    const logoutHandler = () => {
        setToken(null)
        localStorage.removeItem('token')
        if (logoutTimer !== null && logoutTimer) {
            clearTimeout(logoutTimer)
        }
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