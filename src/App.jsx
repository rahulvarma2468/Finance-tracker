import { useState } from 'react'
import Logo from './components/Logo';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Hero from './pages/Hero';

import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App