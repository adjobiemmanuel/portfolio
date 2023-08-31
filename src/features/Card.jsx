import React, { useContext } from "react";
import Button from "./Button";
import { blackWhiteContext } from "../context/ModeContext";

function Card({ item }) {
  const { color } = useContext(blackWhiteContext);
  const styleBtn = {
    backgroundColor: color ? "black" : "white",
    color: color ? "white" : "black",
    padding: ".8em",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer",
    border: color ? "none" : "3px solid orange",
  };
  return (
    <>
      <section
        className="card-projet"
        style={{
          boxShadow: color
            ? null
            : "1px 1px  1px 3px rgba(255, 255, 255, 0.146)",
        }}
      >
        <div className="conteneur-card-image">
        <a href={item.lien} target="_blank" rel="noreferrer">
          <img src={item.image} alt={item.image} />
          </a>
        </div>
        <div className="info-image">
          <h1>{item.titre}</h1>
          <p>{item.description}</p>
          <h5>Technologies : {item.tech}</h5>
          <a href={item.lien} target="_blank" rel="noreferrer">
            <Button titre="Voir plus en détail" styleBtn={styleBtn} />
          </a>
        </div>
      </section>
    </>
  );
}

export default Card;
