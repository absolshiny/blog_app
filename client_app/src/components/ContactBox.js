import React, { useState } from 'react';
import '../styles/contactbox.css'

function ContactBox({ isVisible, onClose }) {

    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        console.log(formData); // Log form data to console
        setFormData({ email: '', phone: '', message: '' }); // Clear form after submission
    };
    
    return (
        isVisible && ( // Show only if isVisible is true
        <div className="contact-box">
            <div className="contact-content">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="phone">Phone:</label>
                <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                />
                <label htmlFor="message">Message:</label>
                <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                />
                <button type="submit">Send</button>
            </form>
            <button className="close-button" onClick={onClose}>
                X
            </button>
            </div>
        </div>
        )
    );
}

export default ContactBox;