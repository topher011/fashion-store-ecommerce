// src/pages/Contact.jsx
import React, { useState } from 'react';
import '../style/contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission (e.g., send to backend or email)
        alert('Thank you for contacting us! We will get back to you soon.');
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="subject">Subject:</label>
                    <input 
                        type="text" 
                        id="subject" 
                        name="subject" 
                        value={formData.subject} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        rows="5" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
