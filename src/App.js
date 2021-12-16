import './App.css';
import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
import Home from './Home';
import Individual from './Components/Individual/Individual';
import Companies from './Components/Companies/Companies';
import Government from './Components/Government/Government';
import Institutions from './Components/Institution/Institution';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Individual" element={<Individual />} />
      <Route path="/Companies" element={<Companies />} />
      <Route path="/Government" element={<Government />} />
      <Route path="/Institutions" element={<Institutions />} />
      <Route path="*" element={<div>404 Error: Not Found</div>} /> 
    </Routes>
  );
}

export default App;