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
import Form from './pages/form.jsx'
import { Auth } from './pages/auth';
// import { Home } from './pages/home';
import { Account } from './pages/account';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Componentes
import Footer from "./components/Footer.jsx"
import Nav from "./components/Navbar.jsx"

function App() {
  const [carro, setCarro] = useState( [[]] )
  
  return (
    <>
      <Nav />
      
      {/* Se definen las rutas para frontend */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/auth/:pathname" element={<Auth />} />
          <Route path="/account/:pathname" element={<Account />} />
          <Route path="/catalog" element={<Catalog/>} />
          <Route path="/process" element={<Process/>} />
          <Route path="/user" element={<Users/>} />
          <Route path="/cart" element={<Carro />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  )
}

export default App
