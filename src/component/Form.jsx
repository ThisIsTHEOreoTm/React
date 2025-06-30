import React from 'react';
import './Form.css';
import { useState } from 'react';
let Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        role: '',
        subscribe: false,
        radio: '' 
    });

    const handleChange = (e) => {
        const { name, value, type, checked} = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value               
        });
        console.log(e.target);
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
                <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
            </label>
            <label>
                are you a student or teacher?
                <select name="role" onChange={handleChange} required>
                    <option value="">Select...</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                </select>
            </label>
            <label>
                <input type="checkbox" name="subscribe" onChange={handleChange} />
                Subscribe to newsletter
            </label>
            <label>
                <div className="radio-label">
                <input name="radio" type="radio" value="TTT" onChange={handleChange}  checked={formData.radio == 'TTT'}/>TTT
                <input name="radio" type="radio" value="DDD" onChange={handleChange}  checked={formData.radio == 'DDD'}/>TTT   
                </div>
            </label>
            <button type="submit">Submit</button>
        </form>
        
    );
} 
export default Form;