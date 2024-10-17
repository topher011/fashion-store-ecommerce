import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Products from './pages/Products';
import NotFound from "./pages/NotFound";
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Login from './components/login';
import Register from './components/register';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
    const [cart, setCart] = useState([]);
    const [userId, setUserId] = useState(null); // Declare userId state

    const handleLogin = (id) => {
        setUserId(id); // Store the userId in the state
    };

    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
                        <Route path="/login" element={<Login onLogin={handleLogin} />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
                        <Route path="*" element={<NotFound />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
