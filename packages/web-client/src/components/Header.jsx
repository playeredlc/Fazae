import React from 'react';
import { Container } from '@material-ui/core';

function Header() {
  return (
    <Container className='header'>
      <a href='/'>
        <div>Faz<i>ae</i></div>
      </a>
    </Container>
  );
};

export default Header;