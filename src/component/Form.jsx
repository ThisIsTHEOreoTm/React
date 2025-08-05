import React from 'react';
import { useState } from 'react';
import './Form.css';
import { useEffect } from 'react'; 
import PopUp from './popUp';

let Form = () => {
    const [isFormValid, setIsFormValid] = useState(false);
    const [validationMessage, setValidationMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState({
        name: '',
        phone_number: '',
        Age: '',
        Salary: ''
    });

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
  let allFilled = true;
  const newErrorMessage = {
    name: '',
    phone_number: '',
    Age: '',
    Salary: ''
  };
  let message = '';

  if (formData.name && formData.phone_number && formData.Age && formData.Salary) {

    if (formData.name.length > 10) {
      allFilled = false;
      message = 'Name must be at least 10 characters long';
      newErrorMessage.name = message;
    } else if (formData.phone_number.length < 8) {
      allFilled = false;
      message = 'Phone number must be at least 8 digits long';
      newErrorMessage.phone_number = message;
    } else if (Number(formData.Age) < 18 || Number(formData.Age) > 100) {
      allFilled = false;
      message = 'Age must be between 18 and 100';
      newErrorMessage.Age = message;
    } else if (String(formData.Age).length > 3) {
      allFilled = false;
      message = 'Age must be a 3 digit number';
      newErrorMessage.Age = message;
    } else if (Number(formData.Salary) < 30000) {
      allFilled = false;
      message = 'Salary must be at least 30000';
      newErrorMessage.Salary = message;
    } else {
      allFilled = true;
      message = 'All required fields are filled correctly';
    }

  } else {
    allFilled = false;
    message = 'All fields are required';
  }
  setValidationMessage(message);
  setErrorMessage(newErrorMessage);
  console.log('Validation Message:', message);
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
        {errorMessage.name && <span className="error-message">{errorMessage.name}</span>}
        </label>
        <label htmlFor="phone_number">Phone Number: <span className="required-star">*</span>
        <input type="number" name="phone_number" placeholder="phone_number" value={formData.phone_number} onChange={handleChange} />
        {errorMessage.phone_number && <span className="error-message">{errorMessage.phone_number}</span>}
        </label>
        <label htmlFor="Age">Age: <span className="required-star">*</span>
        <input type="number" name="Age" placeholder="Age" value={formData.Age} onChange={handleChange} />
        {errorMessage.Age && <span className="error-message">{errorMessage.Age}</span>}
        </label>
        
        
        
        
        <label className="checkbox-container">
            <input type="checkbox" name="employee" id="employee" onChange={handleChange} />
            <span className="checkmark"></span>
            <span className="checkbox-label">Are you an employee? <span className="required-star">*</span></span>
        </label>



        <label htmlFor="Salary">Salary: <span className="required-star">*</span>
        <input type="number" name="Salary" placeholder="Salary" value={formData.Salary} onChange={handleChange} />
        {errorMessage.Salary && <span className="error-message">{errorMessage.Salary}</span>}
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