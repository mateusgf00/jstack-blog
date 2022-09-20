import React, { useContext } from 'react';

import { Container } from './styles';

import { ThemeContextAPI } from '../../context/themeContext';

export default function Footer() {
  const { onToggleTheme } = useContext(ThemeContextAPI);

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button
        type="button"
        onClick={onToggleTheme}
      >🌞</button>
    </Container>
  );
}