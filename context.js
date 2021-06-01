import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [detailedDrink, setDetailedDrink] = useState('')

  return (
    <AppContext.Provider
      value={{ detailedDrink, setDetailedDrink }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }