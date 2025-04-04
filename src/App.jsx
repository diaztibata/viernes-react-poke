import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Aleatorio from './componentes/aleatorios'
import Capturados from './componentes/capturados'
import Usuario from './componentes/usuario'
import Pokemon from './componentes/pokemon'
import Favoritos from './componentes/favoritos'
 import Lista from './componentes/lista' 
 import Menu from './componentes/menu';
import './App.css'

function App() {

  return (
    <Router>
      <Menu />
      <Routes>
      <Route path="/" element={<Lista />} />
      <Route path="/favoritos" element={<Favoritos />} />
      <Route path="/usuario" element={<Usuario />} />
      <Route path="/capturados" element={<Capturados />} />
      <Route path="/aleatorio" element={<Aleatorio />} />
      <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
    </Router>
  )
}

export default App
