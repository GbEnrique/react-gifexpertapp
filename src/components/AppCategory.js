import React, { useState } from 'react'
import PropTypes from "prop-types";

const AppCategory = ({setCategories}) => {
    const [inputValue,setInputValue]=useState('');
    const handleInputChange=(e)=>{
      
        setInputValue(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        
       if (inputValue.trim().length>2) {
           setCategories((c=>[inputValue,...c]));
        }
           
    }
  return (
    <form onSubmit={handleSubmit}>
        {/* <h1> {inputValue}</h1> */}
      {/* <h2>Add Category</h2> */}

      <input 
      className='blue-input'
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}



AppCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}
export default AppCategory
