import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'



import { Link } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Componentes/home.jsx";
import Productos from "./Componentes/productos.jsx";
import Navbar from '../src/Componentes/navbar.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
