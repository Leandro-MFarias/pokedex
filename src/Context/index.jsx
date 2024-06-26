import { createContext, useState } from "react";

export const ThemeContext = createContext({})

export function MyThemeProvider(props) {
    const [ theme, setTheme ] = useState(themes.darkTheme)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export const themes = {
    lightTheme: {
        background: '#cbd5e1',
        card: '#1e293b',
        info: '#64748b',
        color: '#d6d6d6'
    },
    darkTheme: {
        background: '#0f172a',
        card: '#64748b',
        info: '#30a7d7',
        color: '#000'
    }
}