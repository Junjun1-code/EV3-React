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
import { Home } from './pages/home';
import { Account } from './pages/account';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Componentes
import Footer from "./components/Footer.jsx"
import Nav from "./components/Navbar.jsx"

// Auth / NeonDB
import { authClient } from './auth';

function App() {
  const [carro, setCarro] = useState([[]])

  // Variables para Auth/NeonDB usadas en /components/LogIn
  
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);
  const [loading, setLoading] = useState(true);

  // Funciones para Auth/NeonDB

  useEffect(() => {
    authClient.getSession().then((result) => {
      if (result.data?.session && result.data?.user) {
        setSession(result.data.session);
        setUser(result.data.user);
      }
      setLoading(false);
    });
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = isSignUp
      ? await authClient.signUp.email({ name: email.split('@')[0] || 'User', email, password })
      : await authClient.signIn.email({ email, password });
    if (result.error) {
      alert(result.error.message);
      return;
    }
    const sessionResult = await authClient.getSession();
    if (sessionResult.data?.session && sessionResult.data?.user) {
      setSession(sessionResult.data.session);
      setUser(sessionResult.data.user);
    }
  };
  const handleSignOut = async () => {
    await authClient.signOut();
    setSession(null);
    setUser(null);
  };
  if (loading) return <div>Loading...</div>;
  if (session && user) {
    return (
      <div>
        <h1>Logged in as {user.email}</h1>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    );
  }

  return (
    <>

      {/* Se definen las rutas para frontend */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/:pathname" element={<Auth />} />
          <Route path="/account/:pathname" element={<Account />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/process" element={<Process />} />
          <Route path="/user" element={<Users />} />
          <Route path="/cart" element={<Carro />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
      <Nav />

      <Home />

      <Footer />
    </>
  )
}

export default App
