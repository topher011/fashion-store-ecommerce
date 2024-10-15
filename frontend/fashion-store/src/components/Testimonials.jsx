// src/components/Testimonials.jsx
import React from 'react';
import '../style/testimonials.css';

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <h2>What Our Customers Are Saying</h2>
            <div className="testimonials-container">
                <div className="testimonial">
                    <p>"FashionTopher has the best collection I've ever seen. I love the quality and the prices!"</p>
                    <h4>kylie jenner</h4>
                </div>
                <div className="testimonial">
                    <p>"The customer service is incredible, and the shipping was fast. I'm a regular shopper now!"</p>
                    <h4>- John Smith</h4>
                </div>
                <div className="testimonial">
                    <p>"If you're looking for trendy and affordable fashion, look no further. FashionTopher is the place."</p>
                    <h4>- Sarah Lee</h4>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
