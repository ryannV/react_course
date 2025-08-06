import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Services" element={<Services/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
