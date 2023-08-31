import React ,{useContext}from "react";
import { Outlet, NavLink } from "react-router-dom";
import Button from "../features/Button";
import {blackWhiteContext} from '../context/ModeContext'

const sociauxMedias = [
  {
    id: 1,
    image: "/insta.jpeg",
    lien: "https://www.instagram.com/ad.jo.bi/",
  },
  {
    id: 2,
    image: "/X.jpeg",
    lien: "https://twitter.com/PierreAdjobi",
  },
  {
    id: 3,
    image: "/github.jpeg",
    lien: "https://github.com/ManouBlog",
  },
  {
    id: 4,
    image: "/linkedin.jpeg",
    lien: "https://www.linkedin.com/in/adjobi-kadjo-pierre-emmanuel/",
  },
];

function Main() {
 const {color,toggleModeLightBlack} = useContext(blackWhiteContext)
 const styleRoutes = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "1em",
};
const toggleMode = {
  padding: ".5em",
  fontWeight: "bold",
  background: "white", 
  border: "2px solid black" ,
  borderRadius: "7px",
};
  return (
    <>
      <div className="conteneur-mode">
        <Button
          styleBtn={toggleMode}
          handleClick={toggleModeLightBlack}
          icon = {color ? '/iconSoleil.jpeg' : "./moon.jpeg"}
          addImage={true}
        />
      </div>
      <section className="description">
        <div>
          <div className="desc">
            <h1 style={{ fontSize: "5vh" }}>Adjobi.Pierre</h1>
            <h3>
              <strong>Imaginer, concevoir</strong>
              <br />
              Hello world. Je suis Adjobi Pierre.
              <br />
              Développeur web senior très cool &#x1F60A;.
              <br />
              je régle des problèmes avec juste du code.
              <br />
              Mes outils : React js & Vue js
            </h3>
          </div>
          <div className="sociaux-medias">
            {sociauxMedias.map((item) => (
              <div
                key={item.id}
                style={{
                  width: "30px",
                  position: "relative",
                  height: "30px",
                  boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.200)",
                  margin: ".5em",
                  cursor: "pointer",
                }}
              >
                <a href={item.lien} target="_blank" rel="noopener noreferrer">
                  <img
                    src={item.image}
                    alt={item.image}
                    style={{
                      width: "100%",
                      position: "absolute",
                      height: "100%",
                      top: "0",
                      bottom: "0",
                      objectFit: "cover",
                    }}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        <ul style={styleRoutes} className="conteneur-router">
          <NavLink to="/" style={
            {color:color ? null:"white"}
          }>Projets</NavLink>
          <NavLink to="contacts" style={
            {color:color ? null:"white"}
          } >Contact</NavLink>
          <NavLink to="blog" style={
            {color:color ? null:"white"}
          }>Blog</NavLink>
        </ul>
        <div>
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default Main;
