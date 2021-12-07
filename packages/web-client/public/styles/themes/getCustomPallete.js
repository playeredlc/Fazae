function getCustomPalette(mode) {
  return ({
    palette: {
      mode: mode,
      ...(mode === 'dark' 
        ?
          {
            background: {
              default: '#121212',
            },
          }
        : 
          {
            background: {
              default: '#f3f3f3',
            },
          }),
    },
    typography: {
      body1: {
        fontFamily: '"Montserrat", sans-serif'
      }
    },
    
  });
};

export default getCustomPalette;
