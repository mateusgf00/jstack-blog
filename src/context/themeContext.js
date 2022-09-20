import React, { useState, createContext, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from '../styles/themes';

export const ThemeContextAPI = createContext('dark');

export function ThemeContext(props) {
  const [theme, setTheme] = useState('dark');

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContextAPI.Provider value={{
      theme, onToggleTheme: handleToggleTheme
    }}>
      <ThemeProvider theme={currentTheme}>
        {props.children}
      </ThemeProvider>
    </ThemeContextAPI.Provider>
  )
}