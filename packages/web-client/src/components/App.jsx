import React, { useMemo, useState, createContext} from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormsHolder from './Form/FormsHolder';
import Estimation from './Estimation/Estimation';
import Header from './Header';
import Footer from './Footer';
import Error from './Error';
import '../../public/styles/styles.css'

function App() {
  
  const ColorModeContext = createContext({ toggleColorMode: () => {} });
  
  const [mode, setMode] = useState('dark');
  function ToggleColorMode() {
    const colorMode = useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
      );
    };
    
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
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
