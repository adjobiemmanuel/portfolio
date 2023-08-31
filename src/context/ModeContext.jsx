import React, { createContext } from "react";

export const blackWhiteContext = createContext(null);

function ModeContext({ children }) {
  const [color, setColor] = React.useState(true);
  const toggleModeLightBlack = () => {
    setColor((prevColor) => !prevColor);
    let body = document.body;
    body.style.backgroundColor = color ? "#16191d" : "white";
    body.style.color = color ? "white" : "#16191d";
    console.log(color);
  };
  let valeur = {
    color,
    toggleModeLightBlack,
  };
  return (
    <blackWhiteContext.Provider value={valeur}>
      {children}
    </blackWhiteContext.Provider>
  );
}

export default ModeContext;
