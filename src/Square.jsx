import React from 'react'
import './index.css';
const Square = ({clr,hexValue,isDarkClr}) => {
  return (
    <section className='square' style={{backgroundColor:clr}} >
        {/* <h2>{clr?'true':'false'}</h2> */}
        <h2 style={isDarkClr ? {color:'white'}:{color:'black'}}>{clr?clr :'Empty value'}</h2>
        <p style={isDarkClr ? {color:'white'}:{color:'black'}} >{hexValue?hexValue:'Empty Hex value'}</p>
    </section>
  )
}

Square.defaultProps = {
    clr:'Empty Props'
}
export default Square