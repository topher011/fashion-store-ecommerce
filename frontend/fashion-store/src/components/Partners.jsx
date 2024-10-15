// src/components/Partners.jsx
import React from 'react';
import '../style/partners.css';

const Partners = () => {
    return (
        <section className="partners-section">
            <h2>Our Fashion Partners</h2>
            <div className="partners-container">
                <img src="https://anta.com/cdn/shop/files/ANTA-Website-Image.jpg?v=1704883585" alt="Partner 1" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0-uWOf5Xd2ayFwxnBZ6q_9QqxWHjNpS-yA&s" alt="Partner 2" />
                <img src="https://logos-world.net/wp-content/uploads/2020/05/Nike-Logo.jpg" alt="Partner 3" />
            </div>
        </section>
    );
};

export default Partners;
