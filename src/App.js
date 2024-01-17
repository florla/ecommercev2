import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
              <Link to = "/">Home</Link>
              <Link to = "/products">Products</Link>
              <Link to = "/contact">Contact</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
