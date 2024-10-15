
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: info@fashiontopher.com</p>
                    <p>Phone: +250780439155</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 FashionTopher. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
