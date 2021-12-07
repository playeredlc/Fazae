import React from 'react';
import { Container } from '@material-ui/core';
import { IconButton } from '@mui/material';
import { Brightness4Rounded, Brightness7Rounded } from '@mui/icons-material';

function Header({ currentMode, toggleTheme }) {
  
  return (
    <div className='header'>
      <div>
        <a href='/' >
          <div>Faz<i>ae</i></div>
        </a>
      </div>
      
      <div>
        <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
            {currentMode === 'dark' ? <Brightness7Rounded /> : <Brightness4Rounded />}
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
