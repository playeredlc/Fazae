import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormsHolder from './Form/FormsHolder';
import Estimation from './Estimation/Estimation';
import Header from './Header';
import Footer from './Footer';
import Error from './Error';
import '../../public/styles/styles.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<FormsHolder />} />
        <Route exact path='/resultados' element={<Estimation />} />
        <Route exact path='/error' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
