import React,{useContext} from "react";
import {blackWhiteContext} from '../context/ModeContext'
function Header() {
  const {color} = useContext(blackWhiteContext)
  return (
    <>
      <section className="conteneur-image">
        <div className="profile" style={
          {border: color ? null :"5px solid black"}
        }></div>
      </section>
    
    </>
  );
}

export default Header;
