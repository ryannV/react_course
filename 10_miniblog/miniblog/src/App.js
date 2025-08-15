// CSS
import "./App.css";

// Config
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

// Hooks
import { useState, useEffect } from "react";
import { useAuthetication } from "./hooks/useAuthentication";

// Context
import { AuthProvider } from "./context/authContext";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import CreatePost from "./pages/CreatePost/CreatePost";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {

  const [user, setUser] = useState(undefined);
  const {auth} = useAuthetication();

  const loadingUser = user === undefined;

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className="app">
      <AuthProvider value={{user}}>
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={!user ? <Register /> : <Navigate to='/'/>} />
              <Route path="/login" element={!user ? <Login /> : <Navigate to='/'/>} />
              <Route path="/posts/create" element={user ? <CreatePost /> : <Navigate to='/login'/>} />
              <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to='/login'/>} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
