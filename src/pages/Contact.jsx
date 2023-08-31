import React from "react";
import Input from "../features/Input";
import Button from "../features/Button";
function Contact() {
  const handleInput = (e) => {
    console.log(e);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
    
      <form
        
        onSubmit={handleSubmit}
      >
      <h2>Veux-tu me laisser un message</h2>
      <br />
        <Input
          nameLabel="nom"
          titreLabel="Nom"
          type="text"
          handleInput={handleInput}
        />
        <Input
          nameLabel="prenom"
          titreLabel="Prénoms"
          type="text"
          handleInput={handleInput}
        />
        <Input
          nameLabel="email"
          titreLabel="Email"
          type="email"
          handleInput={handleInput}
        />
        <label htmlFor="msg">Message</label>
        <br />
        <textarea
          name="msg"
          id=""
          cols="30"
          rows="10"
          style={{
            width: "99%",
            background: "rgba(0, 0, 0, 0.364)",
            color: "white",
            fontSize: "1.5em",
            padding: "0 0 0 .5em",
            fontWeight: "bold",
          }}
        ></textarea>
        <div>
          <Button
            titre="Envoyer"
            type="submit"
            styleBtn={{
              background: "crimson",
              padding: "1em",
              color: "white",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            disabled={true}
          />
        </div>
     
      </form>
      
    </>
  );
}

export default Contact;
