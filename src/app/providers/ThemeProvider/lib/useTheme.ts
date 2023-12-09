import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { useContext } from 'react'

interface USeThemeResult {
    toggleTheme: () => void
    theme:Theme
}

export function useTheme(): USeThemeResult {
	const { theme, setTheme } = useContext(ThemeContext)

	const toggleTheme = () => {
		const newTheme = Theme.STANDARD
		setTheme(newTheme)
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}

	return { theme, toggleTheme }
}