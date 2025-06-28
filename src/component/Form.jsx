import React from 'react';
import { useState } from 'react';
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
       const { name, value, type, checked} = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value               
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    
    return (
        <div className="form-container"> 
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        </label>
        <label htmlFor="phone_number">Phone Number:
        <input type="number" name="phone_number" placeholder="phone_number" value={formData.phone_number} onChange={handleChange} />
        </label>
        <label htmlFor="Age">Age:
        <input type="number" name="Age" placeholder="Age" value={formData.Age} onChange={handleChange} />
        </label>
        <label htmlFor="emplyee">Employee:
         <input type='checkbox' name='emplyee' checked={formData.emplyee} onChange={handleChange} />
        </label>
        <label htmlFor="Salary">Salary:
        <input type="number" name="Salary" placeholder="Salary" value={formData.Salary} onChange={handleChange} />
        </label>
        <label htmlFor="submit">
        <button type="submit">Submit</button>
        </label>
        </form>
        </div>
    );
    }
export default Form;