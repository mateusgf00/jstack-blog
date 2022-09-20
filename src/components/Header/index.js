import React, { useContext } from 'react';

import { Container } from './styles';

import { ThemeContextAPI } from '../../context/themeContext';

export default function Header() {
  const { onToggleTheme } = useContext(ThemeContextAPI);

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button 
      type="button"
      onClick={onToggleTheme}
      >🌞</button>
    </Container>
  );
}