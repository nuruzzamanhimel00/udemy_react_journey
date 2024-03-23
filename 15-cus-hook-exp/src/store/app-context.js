import React from "react";

const AppContext = React.createContext({
    tasks: [],
    addTask: () => { },
    isLoading:(bool) => {}
    
});

export default AppContext;
