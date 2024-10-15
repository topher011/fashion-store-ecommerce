// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css'
import { MdArrowForward } from 'react-icons/md';

const Navbar = () => {
    return (
        <nav>
            <div className='topher'>
                <ul>
                <li>
                    <Link to="/">FashionTopher</Link>
                </li>
                </ul>
            </div>
            <div className='links-name'>
            <ul>
            
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className='sublog'>
                
                <Link to="/login">
                <button className='login-button'>
                    Log In <MdArrowForward /></button>
                </Link>
                
                    
                
            </div>
            </div>
          
        </nav>
    );
};

export default Navbar;
 