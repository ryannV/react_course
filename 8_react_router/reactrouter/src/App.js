import './App.css';

// - React Router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';

// Conceito de SPA, usar navegação sem dar reload na pagina, melhorar a experiencia do usuário.

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/About"  element={<About/>}/>
          {/* 4 - Rota Dinamica */}
          <Route path="/Product/:id"  element={<Product/>}/>
          {/* 6 - Nested Route */}
          <Route path="/Product/:id/info"  element={<Info/>}/>
          {/* 7 - No Match Route */}
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
