import React from 'react'
import colornames from 'colornames';
import './index.css';
const Box = ({clr,setClr,isDarkClr,toggle,setHexValue}) => {
  console.log(clr);
  return (
    <form className='inputform' onSubmit={(e)=>e.preventDefault()}>
      <label>Add Color Name:</label>
       <input type="text" 
       placeholder='Add Color Name'
       value={clr}
       onChange={(e)=>{
        setClr(e.target.value);
        setHexValue(colornames(e.target.value));
      }}
       autoFocus  
       required/>   
       <button onClick={toggle}>Toggle Text Color</button>      
    </form>
  )
}

export default Box