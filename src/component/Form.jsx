import React from 'react';
import { useState } from 'react';
import './Form.css';
import { useEffect } from 'react'; 
import PopUp from './popUp';

let Form = () => {
    const [isFormValid, setIsFormValid] = useState(false);
    const requiredFields = ['name', 'phone_number', 'Age', 'Salary'];
    const [formData, setFormData] = useState({
        name: '',
        phone_number: '',
        Age: '',
        employee: false,
        Salary: ''
    });

    const [showPopup, setShowPopup] = useState(false);
    const handleChange = (e) => {
       const { name, value, type, checked} = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value               
        });
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            console.log('Form Data:', formData);
            setShowPopup(true);
        } else {
            alert('Please fill in all required fields!');
        }
    };
    useEffect(() => {
        const allFilled = requiredFields.every(field => 
            formData[field] && formData[field].toString().trim() !== ''
        );
        setIsFormValid(allFilled);
    }, [formData]);

    const closePopup = () => {
    setShowPopup(false);
    setFormData({
        name: '',
        phone_number: '',
        Age: '',
        employee: false,
        Salary: ''
    });
};
    


    return (
        <div className="form-container"> 
        <h1 className='title'>Form Validation</h1>
        <form>
        <label htmlFor="name">Name: <span className="required-star">*</span>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        </label>
        <label htmlFor="phone_number">Phone Number: <span className="required-star">*</span>
        <input type="number" name="phone_number" placeholder="phone_number" value={formData.phone_number} onChange={handleChange} />
        </label>
        <label htmlFor="Age">Age: <span className="required-star">*</span>
        <input type="number" name="Age" placeholder="Age" value={formData.Age} onChange={handleChange} />
        </label>
        
        
        
        
        <label className="checkbox-container">
            <input type="checkbox" name="employee" id="employee" onChange={handleChange} />
            <span className="checkmark"></span>
            <span className="checkbox-label">Are you an employee? <span className="required-star">*</span></span>
        </label>



        <label htmlFor="Salary">Salary: <span className="required-star">*</span>
        <input type="number" name="Salary" placeholder="Salary" value={formData.Salary} onChange={handleChange} />
        </label>
        <label htmlFor="submit">
        <button type="submit" className='submit-button' onClick={handleSubmit} disabled={!isFormValid}>
            {isFormValid ? 'Submit' : 'Please Fill Required Fields'}
        </button>
        </label>
        </form>
        <div className="validation-status">
            <p className={`status-text ${isFormValid ? 'valid' : 'invalid'}`}>
                {isFormValid 
                    ? '✓ All required fields completed' 
                    : '✗ Please complete all required fields'
                }
            </p>
        </div>
        



        {showPopup && <PopUp formData={formData} onClose={closePopup} />}
        <footer>
          <p>© 2025 from The Oreo</p>
        </footer>
        </div>
    );
    }
export default Form;