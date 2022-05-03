import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, ThemeProvider } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import ButtonMezyen from "./sousComponents/ButtonMezyen";
import { GlobalState } from "./GlobalState";
import { createTheme } from "@material-ui/core";

function Home() {
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

export default Home;
