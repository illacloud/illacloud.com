import { createContext } from 'react'

export const InfoContext = createContext({})

export const InfoProvider = (props) => {
  const { isMobile, children } = props
  return (
    <InfoContext.Provider
      value={{
        isMobile,
      }}
    >
      {children}
    </InfoContext.Provider>
  )
}
