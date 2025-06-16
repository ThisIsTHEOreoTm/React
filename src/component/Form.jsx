import React from 'react';
import './Form.css';
import { useState } from 'react';
let Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value               
        });
        console.log(`Field ${name} changed to: ${value}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Here you can add logic to send the form data to a server or API
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Contact Us</h2>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
                Message:
            </label>
                <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
            
            <button type="submit">Submit</button>
        </form>
    );
} 
export default Form;