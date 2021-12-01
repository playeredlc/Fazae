import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormsHolder from './Form/FormsHolder';
import Estimation from './Estimation/Estimation';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<FormsHolder />} />
        <Route exact path='/resultados' element={<Estimation />} />
      </Routes>
    </Router>
  );
}

export default App;
