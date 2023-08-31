import React from 'react'
const styleIput = {
    width:"98%",
    height:"35px",
    background:"rgba(0, 0, 0, 0.364)",
    color:"white",
    fontWeight:"bold",
    padding:"0 0 0 .5em",
    fontSize:"1.5em"
}
function Input({nameLabel,titreLabel,type,handleInput}) {
  return (
    <>
      <label htmlFor={nameLabel}>{titreLabel}</label>
      <br />
      <input type={type} style={styleIput} onChange={handleInput} />
      <br />
    </>
  )
}

export default Input
