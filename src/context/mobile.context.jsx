import { useState, createContext, useEffect } from 'react'

export const MobileContext = createContext({
  width: null,
  setWidth: () => null,
})

export const MobileProvider = ({ children }) => {


  const [width, setWidth] = useState(window.innerWidth)
  const [mobile, setMobile] = useState(false)
  const value = { mobile, setMobile }

  useEffect(() => {

    const getMobile = setWidth(window.innerWidth)

    if (width <= 720) {
      setMobile(true)
    }

    return getMobile
  }, [])

  return <MobileProvider.Provider value={value}>{children}</MobileProvider.Provider>
}