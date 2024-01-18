import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Contact from './Contact';

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div>
        <Link to="/">
          <img id="logo" src="/photos/logo.png" alt="Starlight Logo" />
        </Link>
      </div>

      <div className="nav-icons">
        <img id="search" src="/photos/search.svg" alt="search icon" />
        <img id="bag" src="/photos/bag.svg" alt="shopping bag icon" />
      </div>
    </nav>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
