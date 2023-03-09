import { useState, createContext } from 'react'

export const MobileContext = createContext({
  width: null,
  setWidth: () => null,
})

export const MobileProvider = ({ children }) => {


  const [showMenu, setShowMenu] = useState(true)
  const value = { showMenu, setShowMenu }

  return <MobileContext.Provider value={value}>{children}</MobileContext.Provider>
}