import { createContext, useContext, useState } from 'react'
// no login required

const context = createContext()

export const ContextProvider = ({ children }) => {
    const [mode, setMode] = useState('light')
    
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark')
        } else {
            setMode('light')
        }
    }

    return (
        <context.Provider value={{ mode, toggleMode }}>
            {children}
        </context.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(context)
}

export default context
