import React from 'react';
import { useState } from 'react';
import Form from './Form.css';
import './Form.css';

let Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone_number: '',
        Age: '',
        emplyee: '',
        Salary: ''
    });
    
    const handleChange = (e) => {
        const { name, value , type ,  } = e.target;
        setFormData({
        ...formData,
        [name]: value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="number" name="phone_number" placeholder="phone_number" value={formData.phone_number} onChange={handleChange} />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
        </form>
    );
    }
export default Form;