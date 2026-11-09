// Librerias de Vite
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import viteLogo from './assets/vite.svg'
import './App.css'

// Vistas/paginas
import Catalog from './pages/catalog'
import Home from './pages/home.jsx'
import Process from './pages/process_list.jsx'
import Users from './pages/user_list.jsx'
import Carro from './pages/cart.jsx'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Componentes
import Footer from "./components/footer.jsx"
import Nav from "./components/navbar.jsx"

function App() {
  const [Carro, setCarro] = useState( [[]] )
  
  return (
    <>
      <Nav />
      
      {/* Se definen las rutas para frontend */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/catalog" element={<Catalog/>} />
          <Route path="/process" element={<Process/>} />
          <Route path="/user" element={<Users/>} />
          <Route path="/carro" element={<Carro />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  )
}

export default App
