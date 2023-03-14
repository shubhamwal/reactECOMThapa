// Use Context Hook
// create a context
// provider
// consumer => useContext Hook

import {createContext } from "react";
// It is provided by react

const AppContext = createContext();

// Create a provider

const AppProvider = ({children}) => {
  return <AppContext.Provider value="vinod">
    {children}
  </AppContext.Provider>
}

export {AppProvider, AppContext}

