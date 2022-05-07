import React, { useContext } from "react";
import Album from "../Album";
import { GlobalState } from "./GlobalState";
import ButtonMezyen from "./sousComponents/ButtonMezyen";
function Home1() {
  return (
    <div>
      <img
        alt=""
        src="https://www.es-france.com/img/cms/Recrutement/recrutement-ES.png"
        style={{
          paddingLeft: "400px",
          marginTop: "60px",
          height: "150px",
          width: "auto",
        }}
      />
      <ButtonMezyen />
    </div>
  );
}
function Home() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userApi.isLogged;
  const [isAdmin] = state.userApi.isAdmin;
  return <div>{isLogged ? <Album /> : <Home1 />}</div>;
}

export default Home;
