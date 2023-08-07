import { createContext, useState } from 'react'

export const SessionContext = createContext(null)

export default function SessionProvider({children}) {
  const [access_token, setToken] = useState('')
  const [selected, setSelected] = useState({actor: [], show: []})
  const [searchType, setSearchType] = useState(false)
  const [prevPath, setPrev] = useState('')
  
  return(
    <>
      <SessionContext.Provider value={{token: [access_token, setToken], choices: [selected, setSelected], type: [searchType, setSearchType], prev: [prevPath, setPrev]}}>
        {children}
      </SessionContext.Provider>
    </>
  )
}