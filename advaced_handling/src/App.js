import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

import AuthContext from "./store/auth-context.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // console.log("1");
  useEffect(() => {
    // console.log("2");
    const storeIsLogin = localStorage.getItem("isLoggedIn");
    if (storeIsLogin === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  // console.log("3");
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          onLogout: logoutHandler,
          onLogin: loginHandler,
        }}
      >
        <MainHeader />
        <main>
          {!isLoggedIn && <Login />}
          {/* {!isLoggedIn && <Login onLogin={loginHandler} />} */}
          {/* {isLoggedIn && <Home onLogout={logoutHandler} />} */}
          {isLoggedIn && <Home />}
        </main>
      </AuthContext.Provider>
    </>
  );
}

export default App;
