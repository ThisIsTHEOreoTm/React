import flowerImg from './assets/flower.jpg';
import flowerImg2 from './assets/flower2.jpg';
import Header from './component/Header'
import Post from './component/post'
import Bottonss from './component/bottons'
import './App.css'
import React from 'react';
import Form from './component/Form';
import { useState } from 'react';


function App() {






  const [array, setArray] = useState(['1', '2', '3', '4', '5']);
  const [inputValue, setInputValue] = useState('');
  let arrayList = array.map((item, index) => {
    return (
      <li key={index}>
      {console.log(index)}
        {item}
      </li>
    )
  });

  const addNumber = (e) => {
      e.preventDefault();
    if (inputValue.trim() !== '') {
      setArray([...array, inputValue]);
      setInputValue('');
    }else {
      alert('Please enter another character');
    }
  };

  const removeNumber = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setArray(array.filter((item) => { 
        item !== inputValue; 
      }));
      setInputValue('');
    } else {
      alert('Please enter a number to remove');
    }
  }
  const updateNumber = (e) => {
    e.preventDefault();
    const index = array.indexOf(inputValue);
    if (index !== -1) {
      const newNumber = prompt('Enter the new number:', inputValue);
      if (newNumber === null || newNumber.trim() === '') {
        alert('Please enter a valid number');
        return;
      }
      const newArray = [...array];
      newArray[index] = newNumber;
      setArray(newArray);
      setInputValue('');
    } else {
      alert('Number not found');
    }
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }


  
  return (
    <>
      <div className="">
         {arrayList}
      </div>
        <form>
          <input name='TEXT' type="text" placeholder="Add a number" onChange={handleInputChange} required/>
          <button onClick={addNumber} type="submit">Add</button>
          <input type="text" placeholder="remove a number" onChange={handleInputChange} />
          <button onClick={removeNumber} type="submit">remove</button>
          <input type="text" placeholder="update a number" onChange={handleInputChange} />
          <button onClick={updateNumber} type="submit">Modi</button>
        </form>
        <Form />
    </>
  )
}
export default App





























