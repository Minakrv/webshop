import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Navbar />} />
    </Routes>
    </BrowserRouter>

  

  );
}

export default App;
