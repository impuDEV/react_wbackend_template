import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { useContext } from 'react'

interface USeThemeResult {
    toggleTheme: () => void
    theme:Theme
}

///TODO make MUI theming
export function useTheme(): USeThemeResult {
	const { theme, setTheme } = useContext(ThemeContext)

	const toggleTheme = () => {
		const newTheme = Theme.STANDARD
		setTheme?.(newTheme)
		document.body.className = newTheme
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}

	return {
		theme: theme || Theme.STANDARD,
		toggleTheme
	}
}