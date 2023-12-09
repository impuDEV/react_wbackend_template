import { createContext } from 'react'

export enum Theme {
    STANDARD = 'standard'
}

export interface ThemeContextProps {
    theme?: Theme
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = `${__PROJ_NAME__}_theme`