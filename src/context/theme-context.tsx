'use client'
import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

type ThemeContextProviderProps = {
  children: React.ReactNode
}

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'
      return (window.localStorage.getItem('theme') as Theme) || systemTheme
    }
    return 'light'
  })

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark')
  }
  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')

    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    }

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? 'dark' : 'light'
      if (!localStorage.getItem('theme')) {
        setTheme(newTheme)
        document.documentElement.classList.toggle('dark', e.matches)
      }
    }

    systemTheme.addEventListener('change', handleSystemThemeChange)
    return () =>
      systemTheme.removeEventListener('change', handleSystemThemeChange)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === null) {
    throw new Error('useTheme must be used within a ThemeContextProvider')
  }
  return context
}
