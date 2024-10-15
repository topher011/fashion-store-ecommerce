// src/pages/Home.jsx
import React from 'react';
import '../style/home.css';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import BlogSection from '../components/BlogSection';
import Partners from '../components/Partners';


const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to FashionTopher</h1>
                    <p>Where Fashion Meets Passion</p>
                    <Link to="/products" className="shop-now-btn">Shop Now</Link>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission-section">
                <h2>Our Mission</h2>
                <p>
                    At FashionTopher, we are dedicated to offering the finest fashion pieces from around the world. Our goal is to bring
                    elegance, style, and comfort to your wardrobe. We believe fashion is not just about clothing; it’s about expressing 
                    yourself, and we are here to make sure you shine in every outfit.
                </p>
                <p>
                    We take pride in sourcing high-quality products at affordable prices and delivering exceptional customer service. 
                    Fashion is a journey, and we invite you to embark on that journey with us.
                </p>
            </section>

            {/* Featured Products */}
            <section className="items-section">
                <h2>Our Top Picks</h2>
                <div className="items-grid">
                    <div className="item-card">
                        <img src="https://wwd.com/wp-content/uploads/2024/06/best-stummer-dresses.jpg?w=911&h=510&crop=1" alt="Item 2" />
                        <p>Casual Summer Dress</p>
                    </div>
                    <div className="item-card">
                        <img src="https://hnscraftsmanship.com/wp-content/uploads/2024/05/CLASSIC-LEATHER-JACKET-003-%E2%80%93-BLACK-500x667.jpg" alt="Item 3" />
                        <p>Classic Leather Jacket</p>
                    </div>
                    <div className="item-card">
                        <img src="https://sneakerbardetroit.com/wp-content/uploads/2024/09/Kyrie-Irving-ANTA-KAI-Tribe-Colorways.jpg" alt="Item 3" />
                        <p>Stylish Sneakers</p>
                    </div>
                    <div className="item-card">
                        <img src="https://www.jovani.com/wp-content/uploads/types-of-evening-dresses.jpg" alt="Item 4" />
                        <p>Elegant Evening Gown</p>
                    </div>
                    <div className="item-card">
                        <img src="https://imagevars.gulfnews.com/2023/03/03/Luxury-Designer-Handbags_186a81eb94c_large.jpg" alt="Item 5" />
                        <p>Trendy Handbag</p>
                    </div>
                    <div className="item-card">
                        <img src="https://c7.alamy.com/comp/BG03AP/designer-sunglasses-display-house-of-fraser-oxford-street-london-BG03AP.jpg" alt="Item 6" />
                        <p>Luxury Sunglasses</p>
                    </div>
                </div>
            
            </section>
            
            <Testimonials />

            {/* About Us Section */}
            <section className="about-us-section">
                <h2>About FashionTopher</h2>
                <p>
                    FashionTopher started with a simple idea: to make fashion accessible to everyone. Over the years, we have expanded 
                    our collection to include a wide range of styles, from streetwear to formal attire. Our team of fashion experts curates
                    every item to ensure that our customers always have access to the latest trends.
                </p>
                <p>
                    Whether you're looking for casual pieces to wear every day or something special for a big occasion, we've got you covered. 
                    Explore our collections and find the perfect outfit that reflects your personality.
                </p>
            </section>
            <BlogSection />
            

            <CallToAction />

            <Partners />

            {/* Location Section */}
            <section className="location-section">
                <h2>Visit Us at FashionTopher</h2>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.242315729154!2d30.073401882032856!3d-1.944967984161047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d5a7f1b7048b29%3A0x8f377938e1b07aa9!2sMakuza%20Plaza!5e0!3m2!1sen!2srw!4v1607519349887!5m2!1sen!2srw"
                        width="400"  
                        height="300"
                        allowFullScreen=""
                        loading="lazy"
                        title="FashionTopher Location"
                    ></iframe>
                </div>
                <p>
                    Visit our flagship store at FashionTopher, Makuza Plaza, Kigali Town, Door No. 123. We are open every day from 9 AM to 8 PM.
                    Come and experience the best in fashion!
                </p>
            </section>
        </div>
    );
};

export default Home;
