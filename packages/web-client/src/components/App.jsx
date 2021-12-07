import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormsHolder from './Form/FormsHolder';
import Estimation from './Estimation/Estimation';
import Header from './Header';
import Footer from './Footer';
import Error from './Error';

import getCustomPalette from '../../public/styles/themes/getCustomPallete';
import CssBaseline from '@mui/material/CssBaseline';
import generalStyles from '../../public/styles/styles.css'
import mapboxStyles from '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import darkGeocoderInput from '../../public/styles/geocoderInputDark.lazy.css';
import lightGeocoderInput from '../../public/styles/geocoderInputLight.lazy.css';

function App() {
  mapboxStyles.use();
  generalStyles.use();

  const [mode, setMode] = useState('dark');
  
  useEffect(() => {
    if(mode === 'dark') {
      if(lightGeocoderInput) {
        lightGeocoderInput.unuse();
      }
      darkGeocoderInput.use();
    } else {
      if(darkGeocoderInput) {
        darkGeocoderInput.unuse();
      }
      lightGeocoderInput.use();
    }
  }, [mode]);

  function toggleTheme() {
    if(mode === 'dark') {
      setMode('light');
    } else {
      setMode('dark');
    }
  };

  const theme = createTheme(getCustomPalette(mode));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header currentMode={mode} toggleTheme={toggleTheme} />
        <Routes>
          <Route exact path='/' element={<FormsHolder />} />
          <Route exact path='/resultados' element={<Estimation />} />
          <Route exact path='/error' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
