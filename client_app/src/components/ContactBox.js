import React, { useState } from 'react';
import '../styles/contactbox.css'

function ContactBox({ isVisible, onClose }) {

    const [formData, setFormData] = useState({
        email: '',
        cellphone: '',
        message: ''
    });

    async function sendContacts(contact) {
        try {
          const response = await fetch('http://localhost:3000/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contact)
          });
          if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
          }
          const data = await response.json();
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        console.log(formData);
        sendContacts(formData);
        setFormData({ email: '', cellphone: '00-0000-0000', message: '' }); // Clear form after submission
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
                    name="cellphone"
                    value={formData.cellphone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
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