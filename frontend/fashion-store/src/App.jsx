import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Products from './pages/Products';
import NotFound from "./pages/NotFound";
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Login from './components/login';
import Register from './components/register';
// import ProductDetails from './pages/ProductDetails';
// import Cart from './pages/Cart';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
