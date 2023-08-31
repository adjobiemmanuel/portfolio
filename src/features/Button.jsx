import React from "react";

function Button({
  titre,
  type,
  styleBtn,
  handleClick,
  icon,
  addImage,
  disabled,
}) {
  return (
    <>
      {!disabled ? (
        <button type={type} style={styleBtn} onClick={handleClick}>
          {titre}{" "}
          {addImage ? (
            <img
              src={icon}
              alt={icon}
              style={{ width: "25px", height: "25px" }}
            />
          ) : null}
        </button>
      ) : (
        <p style={{ color: "crimson" }}>
          Pas encore disponible pour l'instant (toutes mes excuses.)
        </p>
      )}
    </>
  );
}

export default Button;
